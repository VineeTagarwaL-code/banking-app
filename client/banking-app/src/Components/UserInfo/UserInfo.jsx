import React from 'react'
import './UserInfo.css'
function UserInfo(props) {

  return (
    <div  id='user_cont'>
    <div className='userInfo'>
    <ion-icon name="person"></ion-icon>
    <h2>{props.name}</h2>
    </div>
    <div className='userInfo'>
    <ion-icon name="cash-outline"></ion-icon>
    <h2>{props.balance}</h2>
    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <ion-icon name="add-outline" style={{cursor:"pointer"}} ></ion-icon>
    </div>
    
    </div>
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
           value={props.amount}
           onChange={(e)=>{
            props.setAmount(e.target.value)
           }}
          />
        </div>
       
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" 
        onClick={ (e)=>{
          props.transferMoney(props.uniqueId)  
           
          }}
        >Add</button>
      </div>
    </div>
  </div>
</div>

   
  </div>
  )
}

export default UserInfo