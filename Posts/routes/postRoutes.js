const express = require('express')
const {createPost,
        getPosts} = require('../controllers/postsController')

//const Workout = require('../models/postsModel')
const router = express.Router()

//GET all posts
router.get('/', getPosts)

//POST a new post
router.post('/',createPosts)
