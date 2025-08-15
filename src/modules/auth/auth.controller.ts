import {Request, Response, NextFunction} from "express";
import {IAuthService} from "./auth.service";

/**
 *
 */
export class AuthController {
  #service: IAuthService;

  //
  constructor(service: IAuthService) {
    this.#service = service;
  }

  //
  registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {firstName, lastName, password} = req.body;

      if (!firstName || !lastName || !password) {
        return res.status(400).json({error: "Missing required fields"});
      }

      const user = await this.#service.registerUser(req.body);
      const {password: _password, ...userData} = user.get({plain: true});
      // new comment
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: userData,
      });
    } catch (error) {
      next(error);
    }
  };
}
