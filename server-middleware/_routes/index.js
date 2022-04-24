const express = require('express')

const authRoutes = require('./auth')
const posts = require('./posts')

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/posts', posts)

module.exports = router
