const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');

// Register sub-routers
router.use('/users', userRouter);

// Add more routers here in the future:
// router.use('/posts', postRouter);

module.exports = router;