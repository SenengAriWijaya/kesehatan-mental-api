import express from "express";
import userController from "../controller/user-controller.js";

const userRouter = express.Router();

userRouter.post("/api/users", userController.createUsers);
userRouter.get("/api/users", userController.getAllUsers);

export { userRouter };
