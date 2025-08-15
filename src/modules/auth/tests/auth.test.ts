import request from "supertest";
import express from "express";
import { authRouter } from "../auth.router";
import { Sequelize } from "sequelize-typescript";
import { User } from "../model/auth.model";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "gange",
  password: "gange",
  database: "jest",
  models: [User],
  logging: false,
});

const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("POST /api/auth/register", () => {
  it("should create a new user successfully", async () => {
    const newUser = {
      firstName: "Test",
      lastName: "User",
      password: "securepassword123",
    };

    const response = await request(app)
      .post("/api/auth/register")
      .send(newUser)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body).toHaveProperty("success", true);
    expect(response.body).toHaveProperty(
      "message",
      "User registered successfully"
    );
    expect(response.body).toHaveProperty("data");

    const { data } = response.body;
    expect(data).toHaveProperty("id");
    expect(data.firstName).toBe(newUser.firstName);
    expect(data.lastName).toBe(newUser.lastName);
    expect(data).not.toHaveProperty("password");
  });

  it("should return 400 if required fields are missing", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ firstName: "OnlyFirstName" })
      .expect(400);

    expect(response.body).toHaveProperty("error", "Missing required fields");
  });
});
