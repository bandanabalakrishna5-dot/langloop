const mongoose = require('mongoose');

const studyActivitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    language: {
        type: String,
        required: [true, 'Language name is required'],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'Duration (in minutes) is required']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const StudyActivity = mongoose.model('StudyActivity', studyActivitySchema);

module.exports = StudyActivity;
