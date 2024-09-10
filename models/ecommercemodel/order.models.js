import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderprice: {
      type: Number,
      required: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    orderItem: [],

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ['PENDING', 'PREPRAING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
