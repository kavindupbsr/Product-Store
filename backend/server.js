import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoute from './route/product.route.js';


dotenv.config();
const app = express();

app.use(express.json());// Middleware to parse JSON request bodies
app.use("/api/products", productRoute); // Mount the product route


// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000 at http://localhost:5000");
});
