const express = require('express');

const EventType = require('../controllers/event-type')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await EventType.getAll();;
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
        const result = await EventType.create(req.body.eventType);
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