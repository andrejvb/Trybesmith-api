import express from 'express';
import nameValidation from '../middlewares/nameValidation';
import priceValidation from '../middlewares/priceValidation';
import productController from '../controllers/product.controller';

const router = express.Router();

router.post('/', nameValidation, priceValidation, productController.createProduct);
router.get('/', productController.findAll);

export default router;