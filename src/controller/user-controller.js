import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
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
    const result = await userServive.getUsers();
    if (!result) throw new Error("Data user tidak ditemukan");
    res.status(200).json({
      status: "success",
      data: result,
      message: "Get all data user successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(404).json({ msg: e.message });
  }
};

export default { createUsers, getAllUsers };
