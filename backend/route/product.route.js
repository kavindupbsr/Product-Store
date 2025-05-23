import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';

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