const mongoose = require('mongoose')

require('dotenv').config()

async function connect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDb Connected")
    }).catch((error)=>{
        console.log("database error" , error)
    })
}

module.exports = connect;