import {
  logautUser,
  loginUser,
  registerUser,
  userInfo,
} from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  // console.log(user);

  await res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const loginUserController = async (req, res) => {
  const sessionUser = await loginUser(req.body);

  // console.log(sessionUser);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      name: sessionUser.name,
      email: sessionUser.email,
      phoneNumber: sessionUser.phoneNumber,
      accessToken: sessionUser.accessToken,
      userId: sessionUser.userId,
    },
  });
};

export const logoutUserController = async (req, res) => {
  // console.log(req.headers.authorization.split(' ')[1]);
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    await logautUser(token);
  }

  res.status(204).send();
};

export const userInfoController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  // console.log(token);
  if (!token) return;
  const user = await userInfo(token);

  res.json({
    status: 200,
    message: 'User information',
    data: { name: user.name, email: user.email },
  });
};
