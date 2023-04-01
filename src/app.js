const express = require('express');
const { homedir, userInfo } = require('os');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server online in http://localhost:${port}`));

const homeRoutes = require('./routes/homeRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')


app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);