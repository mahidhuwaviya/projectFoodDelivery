import User from "../models/user.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setUserToken } from "../service/auth.js";

async function handleUserCreateAccount(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() });
  }
  const salt = await bcrypt.genSalt(10);
  const secPAssword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
      name: req.body.name,
      password: secPAssword,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true, msg: "User Created Successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate email error
      return res
        .status(400)
        .json({ success: false, msg: "Email already exists." });
    }
    console.error("ERRORRRRRR::---", error);
    res.status(400).json({ success: false, error: error.message });
  }
}

async function handleUserLogin(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() });
  }
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  try {
    const logginUser = await User.findOne({ email: userEmail });
    if (!logginUser) {
      return res.status(400).json({ success: false, error: "Wrong Email!!" });
    }
    const pwdcompare = await bcrypt.compare(userPassword, logginUser.password);
    if (!pwdcompare) {
      return res
        .status(400)
        .json({ success: false, error: "Wrong Password!!" });
    }

    const authtoken = await setUserToken(logginUser);
    res.cookie("token", authtoken);
    return res.json({
      success: true,
      error: "Logged In Successfully",
    });
  } catch (error) {
    console.error("ERRORRRRRR::---", error);
    res.status(400).json({ success: false, error: error.message });
  }
}

export { handleUserCreateAccount, handleUserLogin };
