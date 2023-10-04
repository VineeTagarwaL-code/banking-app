//packages

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//server setup
const app = express()
app.use(express.json())
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const connect = require('../server/DataBase/connect')
const userRouter = require('../server/routes/user')
app.use('/api/v1', userRouter)
const StartServer = async()=>{
    try{
        await connect();
        app.listen(process.env.PORT , ()=>{
            console.log("server started at port" , process.env.PORT);
        })
    }catch(error){
        console.log("error while booting the server" , error)
    }
}

StartServer()