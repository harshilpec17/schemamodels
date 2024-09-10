import mongoose from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    title: {
      type: String,
      isrequired: true,
    },
    content: {
      type: String,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const todomodel = mongoose.model('todoschem', todoSchema);
