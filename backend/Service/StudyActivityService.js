const StudyActivity = require('../Models/StudyActivity');

class StudyActivityService {
    /**
     * Log a new study activity
     */
    async logActivity(userId, language, duration) {
        const activity = new StudyActivity({
            user: userId,
            language,
            duration
        });
        return await activity.save();
    }

    /**
     * Get all activities for a user
     */
    async getUserActivities(userId) {
        return await StudyActivity.find({ user: userId }).sort({ date: -1 });
    }

    /**
     * Get aggregated stats (total minutes per language) for a user
     */
    async getAggregatedStats(userId) {
        const stats = await StudyActivity.aggregate([
            { $match: { user: new mongoose.Types.ObjectId(userId) } },
            {
                $group: {
                    _id: '$language',
                    totalMinutes: { $sum: '$duration' },
                    sessions: { $sum: 1 }
                }
            }
        ]);
        return stats;
    }

    /**
     * Get Leaderboard (Top students by total study time)
     */
    async getLeaderboard() {
        const leaderboard = await StudyActivity.aggregate([
            {
                $group: {
                    _id: '$user',
                    totalMinutes: { $sum: '$duration' },
                    lastActive: { $max: '$date' }
                }
            },
            { $sort: { totalMinutes: -1 } },
            { $limit: 10 }, // Top 10
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'userDetails'
                }
            },
            {
                $unwind: {
                    path: '$userDetails',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    user: {
                        firstName: { $ifNull: ['$userDetails.firstName', 'Unknown'] },
                        lastName: { $ifNull: ['$userDetails.lastName', ''] },
                        email: { $ifNull: ['$userDetails.email', ''] }
                    },
                    totalMinutes: 1,
                    lastActive: 1
                }
            }
        ]);
        return leaderboard;
    }

    /**
     * Update an activity
     */
    async updateActivity(id, userId, updateData) {
        const activity = await StudyActivity.findOneAndUpdate(
            { _id: id, user: userId },
            updateData,
            { new: true, runValidators: true }
        );
        if (!activity) {
            throw new Error('Activity not found or unauthorized');
        }
        return activity;
    }

    /**
     * Delete an activity
     */
    async deleteActivity(id, userId) {
        const activity = await StudyActivity.findOneAndDelete({ _id: id, user: userId });
        if (!activity) {
            throw new Error('Activity not found or unauthorized');
        }
        return activity;
    }
}

const mongoose = require('mongoose'); // Needed for ObjectId in aggregation
module.exports = new StudyActivityService();
