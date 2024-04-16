import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

mongoose.connect('mongodb://localhost:27017/blog').then(() => {
    console.log("MongoDB is connected")
}).catch(err => {
    console.log(err)
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})