import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios';

import Navbar from '../Components/Navbar/Navbar';
function Home({ url }) {


  const [amount, setAmount] = useState("")
  const [user, setUser] = useState([])

  const [index, setIndex] = useState(0)


  const getAllUsers = async () => {
    await axios.get(`${url}/view`).then((res) => {
      setUser(res.data.response)
    }).catch((error) => {
      console.log("some error occured", error)
    })
  }

  const transferMoney = async (index) => {
    console.log(index , amount)
    console.log(user[index].name)

    await axios.post(`${url}/transfer`,{
      credit:amount,
      uniqueId:user[index].uniqueId
    }).then((res)=>{

      getAllUsers();
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
  useEffect(() => {
    getAllUsers();
  }, [user]);

  const handleTransferClick = (index)=>{
  
    setIndex(index)
  }
  return (
    <div id="homeCont">
  
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
                <h1 className="modal-title fs-5" id="exampleModalLabel">Transfer Money</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div id='inputCont'>
                  <label id='inputLabel'>Enter Amount : </label>
                  <input
                    type='number'
                    id='input'
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value)
                    }} />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success"
                  onClick={(e) => {
                    transferMoney(index)

                  }}
                >Add</button>
              </div>
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default Home