import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel, 
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (
  { name, orderId, price }: ProductInputtableTypes,
): Promise<ServiceResponse<ProductInputtableTypes>> => {
  const newProduct = await ProductModel.create({ name, orderId, price });
  // console.log('LOG SERVICE NEWPRODUCT =>', newProduct.dataValues);
  return { status: 'CREATED', data: newProduct.dataValues };      
};

const findAllProducts = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const allProducts = await ProductModel.findAll();
  // console.log('LOG SERVICE ALLPRODUCTS =>', allProducts);
  return { status: 'SUCCESSFUL', data: allProducts };
};

export default { createProduct, findAllProducts };