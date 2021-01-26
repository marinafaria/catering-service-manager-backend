const express = require('express');

const Client = require('../controllers/client')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await Client.getAll();;
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
        const result = await Client.create(req.body.client);
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