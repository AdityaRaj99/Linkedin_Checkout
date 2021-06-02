import React, { useState } from 'react';
import './Modal.css';

export const Modal = ({ show, setShowModal,user }) => {
const [coupon, setCoupon] = useState("");
const [error, setError] = useState("");
const [sucess, setSuccess] = useState(false)
const [checkOutState,setCheckoutSatate] = useState("first");
const [paymentOption, setPaymentOption] = useState("COD");

function applyCoupon(){
  if(coupon=="GETFREE"){
    setSuccess(true)
    setError("coupon applied succesfully") 
  }else{
    setSuccess(false)
    setError("Invalid Coupon")
  }
}


  return (
    <div className="modal-wrapper" hidden={!show}>
      <div className='modal-container' hidden={checkOutState==="first"?false:true}>
      <div className="modal-header">
        <p>Use Code GETFREE</p>
        <span onClick={()=>{setShowModal(false); setCheckoutSatate("first")}} className="close-modal-btn">x</span>
      </div>

      <div className="modal-content">
        <div className="modal-body">
          <div>
            <div><h4>{user.name}</h4>
            <div class="dropdown">
                  <button class="dropbtn">{paymentOption}</button>
                  <div class="dropdown-content">
                    <p onClick={()=>setPaymentOption("COD")}>COD</p>
                    <p onClick={()=>setPaymentOption("Debit Card")}>Debit Card</p>
                    <p onClick={()=>setPaymentOption("Bhim UPI")}>Bhim UPI</p>
                  </div>
                </div>
            </div>

          <h4>Price: </h4>
          <h4 style={{textDecoration:sucess?"line-through":"none"}} >399</h4>
          <h4 hidden={!sucess} style={{color:"green"}}>Free</h4>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>

        <div style={{color:sucess?"green":"red"}}><p>{error}</p></div>
        <input value={coupon} onChange={(e)=>setCoupon(e.target.value)} type="text" placeholder="Enter Coupon Here"/> <button onClick={applyCoupon}>Apply</button>
        <div className="modal-footer">
          <button onClick={()=>{setCheckoutSatate("second")}} className="btn-cancel">Checkout User</button>
        </div>
      </div>
    </div>

    
    <div className='modal-container2' hidden={checkOutState==="first"?true:false}>
    <div className="orderDetails">    
      <button onClick={()=>{setShowModal(false); setCheckoutSatate("first")}} className="close-payment-btn">x</button>
      <h2>Your Order Has Been Placed Successfully</h2>
      <div className="details"><h3>Payment Mode: {paymentOption}</h3>
      <h3>Coupon Applied: {sucess?"GETFREE":"none"}</h3>
      <h3>Delivery Charge: Rs. 100</h3>
      <h3>Total Cost: {sucess?"100":"499" }</h3>
      <h3>Your Order Will Be Delivered Within 2 Working Days</h3></div></div>
    </div>
    </div>
  )
};