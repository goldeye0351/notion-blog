export default function handler(req, res) {
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.status(200).json({ ip: ipAddress });
}