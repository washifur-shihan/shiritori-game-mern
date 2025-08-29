const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    score: { type: Number, default: 0 } });

const gameSchema = new mongoose.Schema({ 
    players: { type: [playerSchema], required: true }, 
    wordsHistory: { type: [String], default: [] }, 
    currentPlayer: { type: Number, default: 0 }, 
    lastLetter: { type: String, default: null }, 
    createdAt: { type: Date, default: Date.now } });
module.exports = mongoose.model('Game', gameSchema);