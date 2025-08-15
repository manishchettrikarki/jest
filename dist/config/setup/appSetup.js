"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("../router");
//
exports.app = (0, express_1.default)();
//
exports.app.disable("x-powered-by");
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: "5mb" }));
// health check
exports.app.get("/health", (__req, res) => {
    return res.send("hello");
});
//
exports.app.use("/api", router_1.appRouter);
//
exports.default = exports.app;
//# sourceMappingURL=appSetup.js.map