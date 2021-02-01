const express = require('express');

// está incompleto, refazer
const Quotation = require('../controllers/quotation')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await Quotation.getAll();;
        res.status(200).json({
            data: result
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await Quotation.create(req.body.quotation, req.body.products);
        res.status(201).json({
            data: {
                id: result[0]
            }
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await Quotation.getById(req.params.id);
        res.status(200).json({
            data: result[0]
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
})

module.exports = router;