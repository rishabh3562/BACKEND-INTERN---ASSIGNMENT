// playersRoutes.js
const express = require('express');
const playersController = require('../controllers/playersController');

const router = express.Router();

// Define routes
router.post('/players', playersController.createPlayer);
router.put('/players/:id', playersController.updatePlayer);
router.delete('/players/:id', playersController.deletePlayer);
router.get('/players', playersController.getAllPlayers);
router.get('/players/rank/:val', playersController.getRankedPlayer);
router.get('/players/random', playersController.getRandomPlayer);

module.exports = router;
