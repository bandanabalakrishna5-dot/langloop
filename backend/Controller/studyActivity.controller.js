const studyActivityService = require('../Service/StudyActivityService');

class StudyActivityController {
    /**
     * Log a new study activity
     */
    async logTime(req, res) {
        try {
            // Assuming req.user is set by auth middleware (or userId passed in body for now if no auth middleware active)
            // In a real app, middleware like Passport or JWT would set req.user
            const userId = req.body.userId; // Temporary: explicit userId for now until full auth middleware
            const { language, duration } = req.body;

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const activity = await studyActivityService.logActivity(userId, language, duration);
            res.status(201).json({
                message: 'Study time logged successfully',
                data: activity
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get user history
     */
    async getHistory(req, res) {
        try {
            const userId = req.query.userId;
            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const history = await studyActivityService.getUserActivities(userId);
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get aggregated stats
     */
    async getStats(req, res) {
        try {
            const userId = req.query.userId;
            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const stats = await studyActivityService.getAggregatedStats(userId);
            res.status(200).json(stats);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get Leaderboard
     */
    async getLeaderboard(req, res) {
        try {
            const leaderboard = await studyActivityService.getLeaderboard();
            res.status(200).json(leaderboard);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update an activity
     */
    async update(req, res) {
        try {
            const { id } = req.params;
            const { userId, ...updateData } = req.body;

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required for authorization' });
            }

            const updatedActivity = await studyActivityService.updateActivity(id, userId, updateData);
            res.status(200).json({
                message: 'Activity updated successfully',
                data: updatedActivity
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete an activity
     */
    async delete(req, res) {
        try {
            const { id } = req.params;
            const userId = req.query.userId || req.body.userId; // Allow either

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required for authorization' });
            }

            await studyActivityService.deleteActivity(id, userId);
            res.status(200).json({ message: 'Activity deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new StudyActivityController();
