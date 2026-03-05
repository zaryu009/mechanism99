import app from "../src/app.js";
import { connectRedis } from "../src/config/redis.js";

let redisReady = false;

export default async function handler(req, res) {

  try {

    if (!redisReady) {
      await connectRedis();
      redisReady = true;
    }

    return app(req, res);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server error"
    });

  }

}
