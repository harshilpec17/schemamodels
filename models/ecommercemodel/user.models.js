import mongoose from 'mongoose';

const userSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
