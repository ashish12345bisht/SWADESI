import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { ImCross } from "react-icons/im";

function Order() {
  return (
    <div className="order">
      <div className="order__top">
        <img src="../assets/checkout-1.png" />
        <div>
          <h2>TWILL MINI DRESS</h2>
          <p>Color : BLACK</p>
          <p>
            <span>Size: L</span> <span>QTY: 1</span>
          </p>
          <h2>₹ 2490</h2>
        </div>
      </div>
      <div className="remove__wishlist">
          <button><ImCross/>Remove</button>
          <button><AiOutlineHeart/> Wishlist</button>
      </div>
    </div>
  );
}

export default Order