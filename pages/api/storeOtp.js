import Redis from 'ioredis'
import uuid from 'react-uuid';

let redis = new Redis(process.env.REDIS_URL)

export default async (req, res) => {
    const otpId = uuid();
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpRedis = await redis.set(otpId, otp, 'EX', 60);
    res.status(200).json({ otpId })
}