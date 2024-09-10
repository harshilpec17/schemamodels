import mongoose from 'moongoose';

const userschema = new mongoose.schema(
  {
    username: {
      type: String,
      isUnique: true,
      require: true,
    },
    password: {
      type: String,
      isUnique: true,
      require: true,
      min: [6, 'minimum 6 character required'],
      max: 20,
    },

    email: {
      type: String,
      require: true,
      isUnique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userschema);
