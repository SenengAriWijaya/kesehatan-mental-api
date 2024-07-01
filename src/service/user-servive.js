import { validate } from "../validation/validation.js";
import { postUserValidation } from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js";
import moment from "moment-timezone";

const createUser = async (req) => {
  const tanggal = moment().tz("Asia/Jakarta").format("DD-MM-YYYY");
  const users = validate(postUserValidation, req);

  return prismaClient.user.create({
    data: { ...users, tanggal: tanggal },
  });
};

const getUsers = async () => {
  //   const users = await prismaClient.user.findMany();
  //   return users;
  return await prismaClient.user.findMany();
};

export default { createUser, getUsers };
