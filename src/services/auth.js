import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { UsersCollection } from '../db/models/user.js';
import { SessionsCollection } from '../db/models/session.js';
import { ONE_DAY } from '../constants/index.js';

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const encryptedPassword = await bcrypt.hash(payload.password, 12);

  const accessToken = randomBytes(30).toString('base64');

  const newUser = await UsersCollection.create({
    ...payload,
    token: accessToken,
    password: encryptedPassword,
  });

  return await SessionsCollection.create({
    name: newUser.name,
    email: newUser.email,
    userId: newUser._id,
    phoneNumber: newUser.phoneNumber,
    accessToken,
    accessTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  // console.log(user);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const passwordMatching = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!passwordMatching) {
    throw createHttpError(401, 'Unauthorized');
  }

  await SessionsCollection.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');

  return await SessionsCollection.create({
    name: user.name,
    email: user.email,
    userId: user._id,
    phoneNumber: user.phoneNumber,
    accessToken,
    accessTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};
