import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const findAllOrders = async (req: Request, res: Response) => {
  const { data } = await ordersService.findAllOrders();
  // console.log('LOG CONTROLLER ALLPRODUCTS =>', data);
  return res.status(200).json(data);
};

export default { findAllOrders };