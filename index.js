const express = require('express');
const cors = require('cors');


const supplyCategoryRouter = require('./routes/supply-category');
const productCategoryRouter = require('./routes/product-category');
const clientRouter = require('./routes/client');
const supplyRouter = require('./routes/supply');
const quotationRouter = require('./routes/quotation');
const productRouter = require('./routes/product');
const quotedProductRouter = require('./routes/quoted-product');
const stockSituationRouter = require('./routes/stock-situation');
const quotationStatusRouter = require('./routes/quotation-status');
const eventTypeRouter = require('./routes/event-type');
const measurementUnitRouter = require('./routes/measurement-unit.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/supply-category', supplyCategoryRouter);
app.use('/product-category', productCategoryRouter);
app.use('/client', clientRouter);
app.use('/supply', supplyRouter);
app.use('/quotation', quotationRouter);
app.use('/product', productRouter);
app.use('/quoted-product', quotedProductRouter);
app.use('/stock-situation', stockSituationRouter);
app.use('/quotation-status', quotationStatusRouter);
app.use('/event-type', eventTypeRouter);
app.use('/measurement-unit', measurementUnitRouter);

app.listen('8000', () => {
    console.log('app listening on 8000');
});