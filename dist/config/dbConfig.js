"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    dbUser: (_a = process.env.DB_USER) !== null && _a !== void 0 ? _a : "gange",
    dbHost: (_b = process.env.DB_HOST) !== null && _b !== void 0 ? _b : "localhost",
    dbPassword: (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : "gange",
    dbName: (_d = process.env.DB_DATABASE) !== null && _d !== void 0 ? _d : "jest",
};
//# sourceMappingURL=dbConfig.js.map