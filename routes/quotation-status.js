express = require('express');

const QuotationStatus = require('../controllers/quotation-status')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await QuotationStatus.getAll();;
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
        const result = await QuotationStatus.create(req.body.quotationStatus);
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