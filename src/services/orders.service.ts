import { Order, OrderResponse } from '../types/Order';
import OrderModel, { OrderInputtableTypes } from '../database/models/order.model';
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

// const createOrder = async (ordevalues: 
// OrderResponse): Promise<ServiceResponse<OrderInputtableTypes>> => {
//   const newOrder = await OrderModel.create({ userId: Number(ordevalues.userId) });
//   const { id } = newOrder.dataValues;
//   const productIds = ordevalues.productIds as number[];
//   const products = await searchProducts(productIds);

//   const updateOrders = products.filter(Boolean).map((product: ) => ({
//     name: product.name,
//     price: product.price,
//     orderId: id,
//   }));
//   await ProductModel.bulkCreate(updateOrders);
//   return {
//     status: 'SUCCESSFUL',
//     data: { userId: newOrder.userId, productIds },
// //   };
// }
// };

export default { findAllOrders };