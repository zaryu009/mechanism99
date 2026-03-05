import dotenv from "dotenv";
dotenv.config();

console.log("APP STARTED");
console.log("REDIS HOST =", process.env.REDIS_HOST);

import app from "./src/app.js";
import { connectRedis } from "./src/config/redis.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
