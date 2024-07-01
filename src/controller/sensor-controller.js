import { prismaClient } from "../application/database.js";
import moment from "moment-timezone";
import sensorService from "../service/sensor-service.js";

const createDataSensors = async (req, res) => {
  try {
    const {
      detakJantung,
      kelembapanKulit,
      statusJantung,
      statusKulit,
      statusStres,
    } = req.query;
    const tanggal = moment().tz("Asia/Jakarta").format("DD-MM-YYYY");

    const result = await prismaClient.sensor.create({
      data: {
        tanggal: tanggal,
        detak_jantung: detakJantung,
        kelembapan_kulit: kelembapanKulit,
        status_jantung: statusJantung,
        status_kulit: statusKulit,
        status_stres: statusStres,
      },
    });
    res.status(201).json(result);
  } catch (e) {
    console.log(e);
    res.status(400).send("Create Data Sensor Failed!!");
  }
};

const dataSensor = async (req, res) => {
  try {
    const result = await sensorService.monitoringSensor();
    if (!result) throw new Error("Data Sensor tidak ditemukan");
    res.status(200).json({
      success: "success",
      data: result,
      message: "Get data sensor successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(400).send("Get Data Sensor Failed!!");
  }
};

const allDataSensors = async (req, res) => {
  try {
    const result = await sensorService.allSensors();
    if (!result) throw new Error("Data Sensor tidak ditemukan");
    res.status(200).json({
      success: "success",
      data: result,
      message: "Get all data sensor successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: e.message });
  }
};

export default { createDataSensors, dataSensor, allDataSensors };
