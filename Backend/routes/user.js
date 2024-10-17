import express from "express";
const router = express.Router();

import { body } from "express-validator";
import {
  handleUserCreateAccount,
  handleUserLogin,
} from "../controllers/user.js";

router.post(
  "/createAccount",
  [
    body("email").isEmail(),
    body("password", "Password must be a maximum of 5 characters.").isLength({
      min: 5,
    }),
    body("name", "Name must be a maximum of 5 characters.").isLength({
      min: 5,
    }),
  ],
  handleUserCreateAccount
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "Password must be a maximum of 5 characters.").isLength({
      min: 5,
    }),
  ],
  handleUserLogin
);

export default router;
