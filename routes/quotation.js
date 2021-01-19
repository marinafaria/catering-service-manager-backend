const express = require('express');

// está incompleto, refazer
const Quotation = require('../controllers/quotation')

const router = express.Router();

router.get('/', async (req, res) => {
    // const result = await Quotation.getAll();
    // res.json(result);
    res.send('incompleto');
});

router.post('/', async (req, res) => {
    // const result = await Quotation.create(req.body.quotation);
    // res.json(result);
    res.send('incompleto');
});

module.exports = router;