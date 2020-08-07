import * as jwt from "jsonwebtoken";
import User from "../model/user";

import key from "../keys";

function verifyJWT(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error: "You must log in",
    });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, key.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({
        error: "You must log in",
      });
    }

    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
}

export default verifyJWT;
