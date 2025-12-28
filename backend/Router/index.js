const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const studyActivityRouter = require('./studyActivity.router');

// Register sub-routers
router.use('/users', userRouter);
router.use('/study-activity', studyActivityRouter);

module.exports = router;