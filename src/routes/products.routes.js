import express from "express"
import {
    getAllProducts, 
    getProductsById, 
    addProduct, 
    deleteProduct } from "../controllers/products.controllers.js"
import { authentication } from '../middleware/authentication.js';


const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductsById)

routes.post("/products/create", authentication, addProduct)

routes.delete("/products/:id", authentication, deleteProduct)

// routes.put("/products/:id", editProduct)

export default routes