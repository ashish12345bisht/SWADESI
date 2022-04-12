import React,{useState} from 'react'
import {ImCross} from 'react-icons/im'
import Order from './Order'
import '../styles/Cart.css';

function Cart() {
    const [cart,setCart]=useState(true);
  return (
    <>
      {cart && (
        <div className="cart">
          <div className="cart__header">
            <h1>MY BAG (1 ITEM)</h1>
            <ImCross onClick={()=>setCart(false)} />
          </div>
          <Order />
          <Order />
        </div>
      )}
    </>
  );
}

export default Cart