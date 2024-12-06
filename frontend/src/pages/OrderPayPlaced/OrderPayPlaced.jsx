import React, { useEffect } from 'react'
import './OrderPayPlaced.css'
import { useNavigate } from 'react-router-dom'

const OrderPayPlaced = () => {

     const navigate = useNavigate();

    useEffect(()=>{
     const timer = setTimeout(()=>{
          navigate('/');
     },30000);
     return()=>clearTimeout(timer);
    },[navigate]);
  return (
    <div className="order-placed">
     <div></div>
      <h1>Order Placed Successfully!!</h1>
      <p>Your order has been placed and will be processed</p>
    </div>
  )
}

export default OrderPayPlaced