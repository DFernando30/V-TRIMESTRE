import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

import { token } from "morgan";

export const authRequired = (req, res, next) => {
  const {token} = req.cookies;

  if (!token)
    return res.status(401).json({ mensaje: "No token, authorization" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ mensaje: "Invalid Token" });

    req.user = user;
    next();
  });
};
