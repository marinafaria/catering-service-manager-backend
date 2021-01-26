const express = require('express');

const MeasurementUnit = require('../controllers/measurement-unit')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await MeasurementUnit.getAll();;
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
        const result = await MeasurementUnit.create(req.body.measurementUnit);
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