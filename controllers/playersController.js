// playersController.js
const Player = require('../models/playerModel');
const catchAsyncError = require('../utils/catchAsyncErros');
const ErrorHandler = require('../utils/Errorhandler');
// Example controller functions
const createPlayer = catchAsyncError(
    async (req, res, next) => {

        const { name, country, score, rank } = req.body;
        const player = new Player({ name, country, score, rank });
        await player.save();
        res.status(201).json(player);

    }
);

const updatePlayer = catchAsyncError(async (req, res, next) => {

    const { name, score } = req.body;
    const player = await Player.findByIdAndUpdate(
        req.params.id,
        { name, score },
        { new: true }
    );
    res.json(player);

});

const deletePlayer = catchAsyncError(async (req, res, next) => {

    await Player.findByIdAndDelete(req.params.id);
    res.status(204).send({ message: "Player deleted successfully" });

});

const getAllPlayers = catchAsyncError(async (req, res, next) => {

    const players = await Player.find().sort({ rank: -1 });
    res.json(players);

});

const getRankedPlayer = catchAsyncError(async (req, res, next) => {

    const player = await Player.findOne({ rank: req.params.val });
    if (!player) {
        return next(new ErrorHandler("Player not found", 404));
    }
    res.json(player);

});

const getRandomPlayer = catchAsyncError(async (req, res) => {

    const count = await Player.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomPlayer = await Player.findOne().skip(randomIndex);
    res.json(randomPlayer);

});

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getAllPlayers,
    getRankedPlayer,
    getRandomPlayer,
};
