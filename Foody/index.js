const express = require("express");
const app = express();
const dishRoutes = require('./routes/dish')
const userRoutes = require('./routes/user')
const orderRoutes = require('./routes/order')
const testRoutes = require('./routes/test')
app.use(express.json())

app.use('/order',orderRoutes);
app.use('/user',userRoutes);
app.use('/dish',dishRoutes);
app.use('/test',testRoutes)

app.listen(3000,()=>{
    console.log("server started on port 3000");
})