"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const auth_router_1 = require("../modules/auth/auth.router");
//
exports.appRouter = (0, express_1.Router)();
//
exports.appRouter.use("/auth", auth_router_1.authRouter);
//# sourceMappingURL=router.js.map