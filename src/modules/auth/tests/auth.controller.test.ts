import {Request, Response, NextFunction} from "express";
import {IAuthService} from "../auth.service";
import {AuthController} from "../auth.controller";

// Helper to create a mock response object
const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

// Helper to create dynamic mock user data
const createMockUserData = () => {
  const random = Math.floor(Math.random() * 10000);
  return {
    id: random,
    firstName: `First${random}`,
    lastName: `Last${random}`,
    password: `Pass${random}!`,
  };
};

describe("AuthController - registerUser", () => {
  let mockService: jest.Mocked<IAuthService>;
  let controller: AuthController;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    mockService = {
      registerUser: jest.fn(),
    } as unknown as jest.Mocked<IAuthService>;

    controller = new AuthController(mockService);
    res = mockResponse();
    next = jest.fn();
  });

  it("should register user successfully", async () => {
    const mockUser = createMockUserData();

    // Sequelize's `get({ plain: true })` mock
    const mockSequelizeUser = {
      get: jest.fn().mockReturnValue(mockUser),
    };

    mockService.registerUser.mockResolvedValue(mockSequelizeUser as any);

    const req = {
      body: {
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
        password: mockUser.password,
      },
    } as Request;

    await controller.registerUser(req, res, next);

    expect(mockService.registerUser).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "User registered successfully",
      data: {
        id: mockUser.id,
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
      },
    });
  });

  it("should return 400 if required fields are missing", async () => {
    const req = {
      body: {firstName: "OnlyFirst"},
    } as Request;

    await controller.registerUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Missing required fields",
    });
    expect(mockService.registerUser).not.toHaveBeenCalled();
  });

  it("should call next with error if service throws", async () => {
    const mockError = new Error("Service failed");

    mockService.registerUser.mockRejectedValue(mockError);

    const req = {
      body: createMockUserData(),
    } as Request;

    await controller.registerUser(req, res, next);

    expect(next).toHaveBeenCalledWith(mockError);
  });
});
