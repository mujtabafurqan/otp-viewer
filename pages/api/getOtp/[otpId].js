import Redis from 'ioredis'
import uuid from 'react-uuid';

let redis = new Redis(process.env.REDIS_URL)

export default async (req, res) => {
    const {otpId} = req.query;
    const otp = await redis.get(otpId);
    res.status(200).json({ otp })
}