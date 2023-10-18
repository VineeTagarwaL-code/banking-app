import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar';
function Home({ url , record }) {
 


  const [amount, setAmount] = useState("")
  const [user, setUser] = useState([])
  const[isOpen , setIsopen] = useState(false)
  const [index, setIndex] = useState(0)


  const getAllUsers = async () => {
   
    await axios.get(`${url}/view`).then((res) => {
      setUser(res.data.response)
    }).catch((error) => {
      console.log("some error occured", error)
    })
  }


  const TransferSucess = () => {
    toast.success(`Transfer to ${user[index].name} successfull `)
  }

  const transferMoney = async (index) => {


    await axios.post(`${url}/transfer`,{
      credit:amount,
      uniqueId:user[index].uniqueId
    }).then((res)=>{
      TransferSucess()
      record.push({
        user:user[index].name , 
        transferBy:"admin",
        amount:amount
      })
      console.log(res)
     }).catch((error)=>{
      console.log("some error occured" , error)
     })
  }


  useEffect(() => {
    getAllUsers();
  }, [])


 
  // useEffect(() => {
  //   console.log(index);
  // }, [index])
  // useEffect(() => {
    
  //   getAllUsers();
  // }, [user]);

  const handleTransferClick = (index)=>{
  
    setIndex(index)
  }
  return (
    <div id="homeCont">
   <ToastContainer />
      <div className='users_infoCont'>
        {
          user.map((singleUser, index) => {
            return (

              <div id='user_cont'>
                <div className='userInfo'>
                  <ion-icon name="person"></ion-icon>

                  <h2>{singleUser.name} </h2>
                </div>
                <div className='userInfo'>
                  <ion-icon name="cash-outline"></ion-icon>
                  <h2>{singleUser.Balance}</h2>
                  <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleTransferClick(index)}>
                    <ion-icon name="add-outline" style={{ cursor: "pointer" }} ></ion-icon>
                  </div>

                </div>
              </div>


            )
          })
        }
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {user[index] &&                <h1 className="modal-title fs-5" id="exampleModalLabel">Account Details of </h1> }

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {user[index] &&
                       <div id="accountDetails">
                       <h5>Account name : {user[index].name===undefined ? "":user[index].name }</h5>
                       <h5>Account Balance : {user[index].Balance===undefined ? "":user[index].Balance }</h5>
                       {
                         isOpen || <button type="button" className="btn btn-success" onClick={()=>{setIsopen(!isOpen)}}>Transfer</button>
                         
                       }
                       </div>}
                
         
                <div id='inputCont'>
                { isOpen ? ( <>
                  <label id='inputLabel'>Enter Amount : </label>
                 
  <input
  type='number'
  id='input'
  value={amount}
  onChange={(e) => {
    setAmount(e.target.value)
  }} /></>) : ""
                  }
                
                </div>

              </div>
              {
                  isOpen ? (
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={()=>{setIsopen(false)}}>Close</button>
                    <button type="button" className="btn btn-success"
                      onClick={(e) => {
                        transferMoney(index)
    
                      }}
                    >Add</button>
                  </div>
                  ) :""
              }
        
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default Home