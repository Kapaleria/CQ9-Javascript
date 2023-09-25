const mongoose = require('mongoose')
const Schema = mongoose.Schema
//schema defines the format of data stored in our database

const postsSchema  = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports =mongoose.model('Posts', postsSchema) 
