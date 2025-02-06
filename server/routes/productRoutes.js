const express = require('express');
const { createProduct, uploadImages } = require('../controllers/productController'); 
const router = express.Router();
router.post('/createProduct', uploadImages, createProduct); 

module.exports = router;