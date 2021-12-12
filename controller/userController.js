import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import EmailService from "../service/emailService.js";
import BaseError from "../error/BaseError.js";

import User from "../model/User.js";

export async function signin(req, res) {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({
      email,
    });

    if (!user)
      return res.status(200).json({
        status: false,
        message: "User Not Exist",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(200).json({
        status: false,
        message: "Invalid credentials",
      });

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: 864000, // 10 days
    });
    user.password = undefined;
    return res.status(200).json({ status: true, name: user.first_name, token });
  } catch (e) {
    throw new BaseError(500, "Can't send email " + e);
  }
}

export async function signup(req, res) {
  const { password, first_name, last_name, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({
        status: false,
        message: "This email is already resister",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const encPassword = await bcrypt.hash(password, salt);

    user = new User({
      password: encPassword,
      first_name,
      last_name,
      email,
    });
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: 864000, // 10 days
    });
    return res.status(200).json({
      status: true,
      message: "Signup successful",
      name: user.first_name,
      token,
    });
  } catch (err) {
    console.log(err);
    throw new BaseError(500, err);
  }
}

export async function sendEmail(req, res) {
  try {
    const emailData = {
      to: "nishchayt9@gmail.com",
      template_id: "d-e08707dad1714583860019f66c84bfb8",
      dynamic_template_data: {
        name: "Nishchay Trivedi",
        otp: "19321",
      },
    };
    await EmailService.sendEmail(emailData);
    return res.json({
      status: true,
      message: "sent",
    });
  } catch (error) {
    throw new BaseError(500, "Can't send email " + error);
  }
}
