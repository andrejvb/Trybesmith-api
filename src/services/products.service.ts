import ProductModel, { 
  ProductInputtableTypes, 
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (
  { name, orderId, price }: ProductInputtableTypes,
): Promise<ServiceResponse<ProductInputtableTypes>> => {
  const newProduct = await ProductModel.create({ name, orderId, price });
  console.log('LOG SERVICE NEWPRODUCT =>', newProduct);
  return { status: 'CREATED', data: newProduct.dataValues };      
};

export default { createProduct };