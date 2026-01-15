import express from 'express';
import redisClient from '../redis/redisClient.ts';

const checkIsRequestAllowed = async (req: express.Request, res: express.Response) => {
    const ipAddress = req.ip;
    if (!ipAddress) {
        return res.status(400).json({
            message: "IP Adress is missing",
        });
    }

    const count = await redisClient.incr(ipAddress);
    if (count == 1) {
        await redisClient.expire(ipAddress, 60);
    }
    const ttl = await redisClient.ttl(ipAddress);

    const maxAllowedRequests = Number(process.env.MAX_LIMT) || 10;

    if (count >= maxAllowedRequests) {
        return res.status(429).json({
            message: "Too Many requests",
            retryAfter: `${ttl} seconds`,
        });
    }

    return res.status(200).json({
        message: 'Request is allowed',
    });
};

export {
    checkIsRequestAllowed,
};