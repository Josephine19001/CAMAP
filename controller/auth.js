import UserServices from "../services/auth";
// import { Error } from "../util/error";

export const signUp = async (req, res, next) => {
  try {
    const newUser = req.body;
    const savedUser = await UserServices.createUser(newUser);

    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
    // res.status(422).json({
    //   success: false,
    //   data: error,
    // });
    // Error(error, res);
    next(new Error(error.message));
  }
};

export const signIn = async (req, res, next) => {
  try {
    const payload = req.body;
    const token = await UserServices.signInUser(payload);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    // Error(error, res);
    // next();
  }
};
