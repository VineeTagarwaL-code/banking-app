import React,{useState , useEffect} from 'react'
import './Home.css'
import axios from 'axios';
import UserInfo from '../Components/UserInfo/UserInfo'
import Navbar from '../Components/Navbar/Navbar';
function Home({url}) {


  const [amount , setAmount] = useState("")
  const [user, setUser] = useState([])


   const getAllUsers = async()=>{
     await axios.get(`${url}/view`).then((res)=>{
      setUser(res.data.response)
      

     
   
     }).catch((error)=>{
      console.log("some error occured" , error)
     })
   }

   const transferMoney = async(uniqueId)=>{
    console.log(amount , uniqueId)
    console.log("hello senpai")
    await axios.post(`${url}/transfer/${amount}/${uniqueId}`).then((res)=>{
      console.log(res.data)
      getAllUsers();
     }).catch((error)=>{
      console.log("some error occured" , error)
     })
   }

   
   useEffect(()=>{
getAllUsers();
   },[])

   
  useEffect(() => {
    getAllUsers();
  }, [user]);
  return (
    <div id="homeCont">
    
        <div className='users_infoCont'>
             {
              user.map((singleUser , key)=>{
                return (
                  <UserInfo 
                  name={singleUser.name} 
                  balance={singleUser.Balance} 
                  transferMoney={transferMoney} 
                  key={key} 
                  setAmount={setAmount} 
                  uniqueId={singleUser.uniqueId}
                 
                  amount={amount} 
        
                  />
                )
              })
             }
          
        </div>
    </div>
  )
}

export default Home