import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Books = mongoose.model("Book", BookSchema);
