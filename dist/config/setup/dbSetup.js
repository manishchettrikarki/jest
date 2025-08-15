"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseSetup = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../dbConfig");
exports.dataBaseSetup = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: dbConfig_1.dbConfig.dbHost,
    database: dbConfig_1.dbConfig.dbName,
    username: dbConfig_1.dbConfig.dbUser,
    password: dbConfig_1.dbConfig.dbPassword,
});
//# sourceMappingURL=dbSetup.js.map