import authService from "../service/auth-service.js";

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({
      message: "User registered successfully!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(201).json({
      message: "User login successfully!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getUser = async (req, res, next) => {
  try {
    // const username = req.auth.username;
    const result = await authService.getUser();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { register, login, getUser };
