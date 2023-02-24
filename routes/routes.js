// import express
const express= require= ("express");
  
// import function from controller
const productController= require( "../controllers/product.js");
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', productController.showProducts,bodyParser.json());
  
// Get Single Product
router.get('/products/:id',productController.showProductById,bodyParser.json());
  
// Create New Product
router.post('/products', productController.createProduct,bodyParser.json());
  
// Update Product
router.put('/products/:id', productController.updateProduct);
  
// Delete Product
router.delete('/products/:id', productController.deleteProduct,bodyParser.json());
  
// export default router
module.exports= router;