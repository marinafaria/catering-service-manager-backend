const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/product');
const quotationRouter = require('./routes/quotation');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/product', productRouter);
app.use('/quotation', quotationRouter);

app.listen('8000', () => {
    console.log('app listening on 8000');
});