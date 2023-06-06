import express from 'express';
import productRoute from './routes/product.route';
import ordersRoute from './routes/orders.route';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/orders', ordersRoute);

export default app;
