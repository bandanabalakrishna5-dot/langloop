const express = require('express');
const router = express.Router();
const studyActivityController = require('../Controller/studyActivity.controller');

// Create a new activity
router.post('/', studyActivityController.logTime);

// Get all activities for a user (query param: ?userId=...)
router.get('/', studyActivityController.getHistory);

// Get aggregated stats (query param: ?userId=...)
router.get('/stats', studyActivityController.getStats);

// Get Leaderboard
router.get('/leaderboard', studyActivityController.getLeaderboard);

// Update/Delete activity (requires id param)
router.put('/:id', studyActivityController.update);
router.delete('/:id', studyActivityController.delete);

module.exports = router;
