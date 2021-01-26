const express = require('express');

const ProductCategory = require('../controllers/product-category')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await ProductCategory.getAll();;
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
        const result = await ProductCategory.create(req.body.productCategory);
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

module.exports = router;