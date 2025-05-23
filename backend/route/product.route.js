import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controller/product.controller.js';
const router = express.Router();

// Create a new product
router.post('/', createProduct);

// Delete a product
router.delete('/:id', deleteProduct);

// Get all products
router.get('/', getProducts);

// Update a product
router.put('/:id', updateProduct);

export default router; 