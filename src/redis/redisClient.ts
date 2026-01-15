import Redis from "redis";

const redisClient = Redis.createClient();

redisClient.on("error", (err) => {
    console.log(err);
});

redisClient.on("connect", () => {
    console.log("connected to redis");
});

redisClient.connect().catch((err) => console.log(err));

export default redisClient;