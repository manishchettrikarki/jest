import { Sequelize } from "sequelize-typescript";
import { User } from "../modules/auth/model/auth.model";

export const testSequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "gange",
  password: "gange",
  database: "jest",
  models: [User], // add your models here
  logging: false,
});
