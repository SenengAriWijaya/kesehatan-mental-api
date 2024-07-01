import { validate } from "../validation/validation.js";
import {
  registerValidation,
  loginValidation,
  getUserValidation,
} from "../validation/auth-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (req) => {
  const user = validate(registerValidation, req);

  const countUser = await prismaClient.auth.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return prismaClient.auth.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (req) => {
  const credentials = validate(loginValidation, req);

  // Get the user by their username
  const user = await prismaClient.auth.findUnique({
    where: {
      username: credentials.username,
    },
  });

  // If no user is found with that username -> User not found
  if (!user) throw new ResponseError(404, "User not found!");

  // Checking password
  const validPassword = await bcrypt.compare(
    credentials.password,
    user.password
  );

  // If password does not match -> Wrong Password
  if (!validPassword) throw new ResponseError(401, "User or Password wrong");

  // Return a token
  //   return { select: { name: true }, user };

  return user;
};

const getUser = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      name: true,
    },
  });
  if (!user) {
    throw new ResponseError(404, "user is not found");
  }
  return user;
};

export default { register, login, getUser };
