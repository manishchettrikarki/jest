import express from "express";
import cors from "cors";
import { appRouter } from "../router";

//
export const app = express();

//
app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// health check
app.get("/health", (__req, res) => {
  return res.send("hello");
});

//
app.use("/api", appRouter);

//
export default app;
