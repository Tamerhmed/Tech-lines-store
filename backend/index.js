import express, { json } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import connectToDb from './db.js';
//routes
import productRoutes from './routes/productRoutes.js';
const app = express();
app.use(express.json())

const port = process.env.PORT || 4000;

app.use('/api/products', productRoutes);



const start = async ()=> {
    try {
        await connectToDb(process.env.MONGO_URI);
        app.listen(port, ()=> {
        console.log(`server is up on ${port}`);
})
    } catch (error) {
        console.log(error.message);
    }
}

start();




