import express from "express";
import { authController } from ".";

//
export const authRouter = express.Router();

//
authRouter.post("/register", authController.registerUser);
