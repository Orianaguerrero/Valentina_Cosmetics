const express = require('express');
const { homedir, userInfo } = require('os');
const app = express();
const path = require('path');   
const methodOverride =  require('method-override');

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));
app.use(methodOverride('_method'));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server online in http://localhost:${port}`));

const homeRoutes = require('./routes/homeRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

