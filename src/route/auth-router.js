import express from "express";
import authController from "../controller/auth-controller.js";

const authRouter = new express.Router();

authRouter.post("/api/users/register", authController.register);
authRouter.post("/api/users/login", authController.login);
authRouter.get("/api/users/account", authController.getUser);

export { authRouter };
