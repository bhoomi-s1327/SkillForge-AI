import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  college: z.string().min(2),
  branch: z.string().min(2),
});

export type RegisterInput = z.infer<typeof registerSchema>;