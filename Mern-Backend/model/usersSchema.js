const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    imagePath:{
        type: String,
        required:true
    },
    date:{
        type:Date
    }
}) 

const users = new mongoose.model('users',userSchema);
module.exports= users;