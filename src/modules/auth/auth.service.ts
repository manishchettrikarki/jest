import crypto from "crypto";
import { UserModelType } from "./model/auth.model";

//
export interface IAuthService {
  registerUser(data: any): Promise<any>;
}

export class AuthService implements IAuthService {
  #userModel: UserModelType;

  //
  constructor(userModel: UserModelType) {
    this.#userModel = userModel;
  }

  //
  async registerUser(data: any): Promise<any> {
    const salt = crypto.randomBytes(16).toString("hex");

    const hashedPassword = this.#hashPassword(data.password, salt);

    const passwordToStore = `${salt}$${hashedPassword}`;

    const user = await this.#userModel.create({
      firstName: data.firstName,
      lastName: data.lastName,
      password: passwordToStore,
    });

    return user;
  }

  #hashPassword(password: string, salt: string) {
    return crypto.createHmac("sha256", salt).update(password).digest("hex");
  }
}
