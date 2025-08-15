import { User } from "./model/auth.model";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

//
export const authService = new AuthService(User);
export const authController = new AuthController(authService);
