import { loginUser, registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

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
      id: sessionUser.userId,
    },
  });
};
