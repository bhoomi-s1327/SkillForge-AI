import { Request, Response } from "express";
import { registerUser } from "../services/authService";
import { registerSchema } from "../validators/authValidator";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const data = registerSchema.parse(req.body);

    const user = await registerUser(data);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};