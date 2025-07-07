import { model, Schema } from 'mongoose';

const sessionsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    phoneNumber: { type: String, required: true },
    accessToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const SessionsCollection = model('sessions', sessionsSchema);
