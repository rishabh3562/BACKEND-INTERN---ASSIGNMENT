// playerModel.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 15 },
    country: { type: String, required: true },
    score: { type: Number, required: true },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
