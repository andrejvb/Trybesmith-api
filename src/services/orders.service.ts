import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

const findAllOrders = async () :Promise<ServiceResponse<Order[]>> => {
  const allOrders = await OrderModel.findAll({ 
    include: { model: ProductModel, attributes: ['id'], as: 'productIds' },
    attributes: ['id', 'userId'], 
  });

  const orders = allOrders.map(({ dataValues: { id, userId, productIds } }) => ({
    id,
    userId,
    productIds: productIds?.map((product) => product.id),
  })) as Order[];

  return { status: 'SUCCESSFUL', data: orders };
};

export default { findAllOrders };