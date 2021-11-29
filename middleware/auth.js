import jwt from "jsonwebtoken";

import BaseError from "../error/BaseError.js";
import User from "../model/User.js";

/**
 * @name  withAuth
 * @description  checks if the user in logged in or not
 * @header  token
 */
exports.withAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token)
    return res.status(200).json({
      status: false,
      message: "No Token",
    });

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;

    next();
  } catch (e) {
    console.error(e);
    throw new BaseError(500, "Invalid Token");
  }
};

/**
 * @name  withAdmin
 * @description  checks if the user in admin or not, always apply it after withAuth
 */
exports.withAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.isAdmin === true) {
      next();
    } else {
      res
        .status(403)
        .json({ status: false, message: "Current user in not a admin" });
    }
  } catch (e) {
    console.error(e);
    throw new BaseError(500, "Invalid Token");
  }
};
