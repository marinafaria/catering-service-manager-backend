express = require('express');

const QuotedProduct = require('../controllers/quoted-product')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await QuotedProduct.getAll();;
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
        const result = await QuotedProduct.create(req.body.quotedProduct);
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