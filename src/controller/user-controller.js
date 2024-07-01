import { prismaClient } from "../application/database.js";
import userServive from "../service/user-servive.js";

const createUsers = async (req, res, next) => {
  try {
    const result = await userServive.createUser(req.body);
    res.status(201).json({
      status: "success",
      message: "Successfully created user!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

// const getAllUsers = async (res) => {
//   try {
//     const users = await userServive.getUsers();
//     res.status(200).json({
//       status: "success",
//       data: users,
//     });
//   } catch (e) {
//     console.log("Error in getting all Users");
//     // next(e);
//   }
// };

const getAllUsers = async (req, res) => {
  try {
    const result = await prismaClient.user.findMany();
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
  }
};

export default { createUsers, getAllUsers };
