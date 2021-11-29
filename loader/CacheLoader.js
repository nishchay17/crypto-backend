import redis from "redis";

const CacheLoader = async () => {
  try {
    const options = {
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
    };

    const client = await redis.createClient(options);
    client.on("error", (error) => console.log(error));
    return client;
  } catch (error) {
    throw new Error("Error with cache");
  }
};

export default CacheLoader;
