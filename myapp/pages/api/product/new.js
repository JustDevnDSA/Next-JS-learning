import { connectDb } from "@/utils/database";
import { Product } from "../../../model/product";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).json({
      success: false,
      message: `No API with ${req.method} Method`,
    });
  } else {
    await connectDb();

    const { price, name, category } = req.body;

    Product.create({
      name,
      price,
      category,
    });
    res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  }
};
