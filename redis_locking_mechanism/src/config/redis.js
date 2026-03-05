import { createClient } from "redis";

const redisClient = createClient({
  socket: {
    host: "redis-16852.crce179.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 16852,
  },
  username: "default",
  password: "3FZ1Fij4CdCVTitT669NhHHQ0ZPnsLLm",
});

redisClient.on("error", (err) => {
  console.log("❌ Redis Error:", err.message);
});

const connectRedis = async () => {

  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("✅ Redis Connected");
  }

};

export { redisClient, connectRedis };
