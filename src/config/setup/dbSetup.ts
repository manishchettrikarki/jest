import { dbConfig } from "../dbConfig";
import { Sequelize } from "sequelize-typescript";
import { User } from "../../modules/auth/model/auth.model";

//
export const dataBaseSetup = new Sequelize({
  dialect: "postgres",
  host: dbConfig.dbHost,
  database: dbConfig.dbName,
  username: dbConfig.dbUser,
  password: dbConfig.dbPassword,
  models: [User],
});
