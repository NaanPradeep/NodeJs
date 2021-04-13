const express = require('express');
const app = express();
const dotenv = require('dotenv');
const verifyTkn = require('./verifyToken');


dotenv.config();

const homeRoute = require('./routes/index');
const categoryRoute = require('./routes/categories');
const authRoute = require('./routes/auth');
const addProductRoute = require('./routes/addProduct');
const addressRoute = require('./routes/addAddress');
const productsRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const profileRoute = require('./routes/profile');


app.use(express.urlencoded({extended : false}));
app.use(express.json());


app.use('/', homeRoute);
app.use('/user', authRoute);
app.use('/categories', categoryRoute);
app.use('/addProduct', addProductRoute);

app.use('/products',verifyTkn , productsRoute);
app.use('/address', verifyTkn, addressRoute);
app.use('/cart', verifyTkn, cartRoute);
app.use('/profile', verifyTkn, profileRoute);


const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true, useUnifiedTopology: true},
				() => console.log('Connected to DB')
	)


app.listen(5000, () => {
	console.log('Server listening on port 5000');
})