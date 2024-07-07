import { prismaClient } from "../application/database.js";
import { io } from "../application/web.js";

const monitoringSensor = async () => {
  const dataSensor = await prismaClient.sensor.findFirst({
    orderBy: {
      id: "desc",
    },
  });
  if (dataSensor) {
    io.emit("monitoring_sensor", { data: dataSensor });
  }
  return dataSensor;
};

const allSensors = async () => {
  const sensors = await prismaClient.sensor.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return sensors;
};

export default { monitoringSensor, allSensors };
