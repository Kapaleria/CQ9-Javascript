const Posts = require('../models/postsModel')
const mongoose = require('mongoose')

//Get all posts
 const getPosts = async(req,res)=>{
    const posts = await Posts.find({}). sort({createdAt: -1})

    res.status(200).json(posts)
 }

//create new post
const createPost = async(req,res) =>{
        const {title,content,year} =req.body
        //add doc to db
        try{
         
            const post =await Posts.create({title,content,year})
            res.status(200).json(post)
        }
        catch(error){
            res.status(400).json({error:error.message})
        } 
} 