// playersController.js
const Player = require('../models/playerModel');

// Example controller functions
const createPlayer = async (req, res) => {
    try {
        const { name, country, score, rank } = req.body;
        const player = new Player({ name, country, score, rank });
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePlayer = async (req, res) => {
    try {
        const { name, score } = req.body;
        const player = await Player.findByIdAndUpdate(
            req.params.id,
            { name, score },
            { new: true }
        );
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deletePlayer = async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ rank: -1 });
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getRankedPlayer = async (req, res) => {
    try {
        const player = await Player.findOne({ rank: req.params.val });
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getRandomPlayer = async (req, res) => {
    try {
        const count = await Player.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomPlayer = await Player.findOne().skip(randomIndex);
        res.json(randomPlayer);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getAllPlayers,
    getRankedPlayer,
    getRandomPlayer,
};
