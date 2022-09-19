import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  const secret =
    process.env.TOKEN_SECRET || "MKd09Y6Gq9A4nmq1TYP8IB+WQ5bceHa3GAqMF";
  if (!req.headers.authorization) {
    res.status(403).json({
      error: "No Credentials sent!",
    });
  }

  try {
    const token = req.headers.authorization;
    let decodedData;
    if (token) {
      decodedData = Jwt.verify(token, secret);
      req.id = decodedData?.id;
    } else {
      decodedData = Jwt.decode(token);
      req.id = decodedData?.sub;
    }
    if (req.id) {
      return next();
    }

    res.status(403).json({
      error: "Token Expired",
    });
  } catch (err) {
    res.status(403).json({
      error: "Token Expired",
    });
  }
};
export default auth;
