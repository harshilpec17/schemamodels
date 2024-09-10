import mongoose from 'moongoose';

const subTodoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      isrequired: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodox',
      },
    ],
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('subTodo', subTodoSchema);
