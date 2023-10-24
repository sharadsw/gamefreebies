import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "");

export const getGamesList = async () => {
  let games = (await redis
    .lrange("freebies_list", 0, 10))
    .map((entry) => JSON.parse(entry));
  return games;
};

export default redis;
