import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
} 

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Product created successfully",
        product: newProduct,
      });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // console.log("id :",id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Product updated successfully",
        product: updatedProduct,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};