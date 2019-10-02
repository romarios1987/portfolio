const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 96
    },
    slug: {
        type: String,
        unique: true,
        sparse: true
    },
    project_link: {
        type: String,
    },
    github_link: {
        type: String,
    },
    image: {
        type: String,
    },
    tools: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);