import { Request, Response } from 'express';
import productService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const { data } = await productService.createProduct({ name, price, orderId });
  return res.status(201).json(data);
};

export default { createProduct };