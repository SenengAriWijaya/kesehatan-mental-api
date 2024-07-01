import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { routerSensors } from "../route/sensor-route.js";
import { userRouter } from "../route/user-route.js";
import { authRouter } from "../route/auth-router.js";

dotenv.config();
export const web = express();
export const server = http.createServer(web);
export const io = new Server(server, {
  // cors: { origin: process.env.CLIENT_URL },
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

web.use(express.json());
web.use(cors());
web.use(routerSensors);
web.use(userRouter);
web.use(authRouter);
