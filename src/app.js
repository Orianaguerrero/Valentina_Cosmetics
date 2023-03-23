const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server online in http://localhost:${port}`));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, './views/home.html')))
app.get('/detalle', (req,res) => res.sendFile(path.join(__dirname, './views/product-detail.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, './views/register.html')))