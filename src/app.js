import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import userRoutes from './routes/userRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config({
    path:'./.env'
});


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);



export { app };
