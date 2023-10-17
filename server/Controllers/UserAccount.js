
const asyncWrap = require('../MiddleWare/async')
const users = require('../Models/User')
const { v4: uuidv4 } = require('uuid');

const getAllAccounts = asyncWrap( async(req , res)=>{
    users.find().then((response) => {
        return res.status(201).json({ response: response })
      }).catch((e) => {
        return res.status(404).json({ response: "NA" })
      })
})
const getSingleAccount = asyncWrap(async(req , res)=>{

    const{name} = req.params;
    console.log(name)
    const user =  await users.findOne({name:name})

    if(user){
        return res.status(200).json({userInfo:user});
    }else{
        return res.status(404).json({ response: "NA" })
    }
})
const transfer = asyncWrap(async(req , res)=>{

    const{credit,uniqueId} = req.body;
    parseInt(credit)
     console.log(credit , uniqueId)
    const user =  await users.findOne({uniqueId:uniqueId}) 

    console.log(typeof(user.Balance))
    const amount = user.Balance + parseInt(credit) ;

    console.log(credit)
  const UpdatedUser =  await users.findOneAndUpdate(
        { uniqueId: uniqueId }, 
        { Balance: amount  }, 
        { new: true }, 
  )

  console.log(UpdatedUser)
})


const createAccount = asyncWrap(async(req , res)=>{
    const uniqueId = uuidv4();
    const{Username} = req.body;
    const newUser = new users({
        name:Username,
        uniqueId:uniqueId
    })
    await newUser.save().then(()=>{
        return res.status(201).json({status:"added" , user:newUser})
    }).catch((e)=>{
        console.log("error while adding user" , e)
    })
})
module.exports = {
    getAllAccounts,
    getSingleAccount,
    transfer,
    createAccount
}