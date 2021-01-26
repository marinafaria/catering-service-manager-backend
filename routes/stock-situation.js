express = require('express');

const StockSituation = require('../controllers/stock-situation')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await StockSituation.getAll();;
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
        const result = await StockSituation.create(req.body.stockSituation);
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