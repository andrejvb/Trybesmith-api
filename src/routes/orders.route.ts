import express from 'express';
import userIdValidation from '../middlewares/userIdValidation';
import productIdValidation from '../middlewares/productIdValidation';
import tokenValidation from '../middlewares/tokenValidation';
import ordersController from '../controllers/orders.controller';

const router = express.Router();

router.get('/', ordersController.findAllOrders);

router.post(
  '/', 
  tokenValidation, 
  userIdValidation, 
  productIdValidation, 
  ordersController.findAllOrders,
);

export default router;