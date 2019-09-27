const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxlength) => {
    return {
        type: String,
        required: true,
        maxlength: maxlength

    }
};

const portfolioSchema = new Schema({
    userId: setStringType(512),
    title: setStringType(256),
    description: setStringType(2048),
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);