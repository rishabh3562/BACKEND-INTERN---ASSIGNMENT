// playerModel.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [15, 'Name cannot be more than 15 characters'],
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
        maxlength: [2, 'Country name be more than 2 characters']
    },
    score: {
        type: Number,
        required: true,
        min: [0, 'Score cannot be less than 0'],
    },
    rank: {
        type: Number,
        required: true,

    }
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
