import express from "express";
import sensorController from "../controller/sensor-controller.js";

export const routerSensors = new express.Router();

routerSensors.post("/api", sensorController.createDataSensors);
routerSensors.get("/api/sensors", sensorController.dataSensor);
routerSensors.get("/api/allSensors", sensorController.allDataSensors);
