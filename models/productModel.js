import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the product"],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug url for the product"],
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    brand: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 5,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the product"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for the product"],
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category for the product"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide the available quantity of the product"],
      min: [0, "Quantity must be a non-negative number"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
