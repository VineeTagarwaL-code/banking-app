
const asyncWrap = require('../MiddleWare/async')

const getAllAccounts = asyncWrap( async(req , res)=>{
    console.log("hey")
})
const getSingleAccount = asyncWrap(async(req , res)=>{
    console.log("hey there")
})
const transfer = asyncWrap(async(req , res)=>{
    console.log("hey")
})

const createAccount = asyncWrap(async(req , res)=>{
    console.log("hey")
})
module.exports = {
    getAllAccounts,
    getSingleAccount,
    transfer,
    createAccount
}