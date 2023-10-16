const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,  
     },
     Balance:{
        type:Number,
        default:0,
     },
     uniqueId:{
      type:String,
      required:true,
     }
})

module.exports= mongoose.model('Users', userSchema)