"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
//
const appSetup_1 = require("./config/setup/appSetup");
const appConfig_1 = require("./config/appConfig");
const dbSetup_1 = require("./config/setup/dbSetup");
//
const PORT = appConfig_1.appConfig.port;
//
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Starting the server
    try {
        appSetup_1.app.listen(PORT, () => {
            console.log("App is running on port:", PORT);
        });
    }
    catch (err) {
        console.log("Error starting the server:", err);
    }
});
//
const databaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dbSetup_1.dataBaseSetup.authenticate();
        console.log("successfully connected");
    }
    catch (error) {
        console.log("Error establishing connection to db", error);
    }
});
//
startServer();
databaseConnection();
//# sourceMappingURL=index.js.map