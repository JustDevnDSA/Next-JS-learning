import { Product } from "@/model/product";
import { connectDb } from "@/utils/database";

export default async function handler(req, res) {
  await connectDb();

  const products = await Product.find({});
  console.log(typeof products);

  res.status(200).json({ message: "Product All", success: true, products });
}
  