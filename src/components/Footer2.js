import React from 'react';
import '../styles/Footer2.css';

export default function Footer() {
  return (
      <>

     {/* free shipping */}
    <nav class="navbar-light d-flex bg-light navfull">
  <div class="container-fluid d-flex imgicon">
  <div className='imageclass fee'>
    <img src="../assets/shippping-icon.png" alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>FREE SHIPPING</h5>
        <p>On purchase over &#8377; 9,999</p>
    </div>

  </div>

  <div class="container-fluid d-flex imgicon">
  <div className='imageclass'>
    <img src="../assets/smiley-icon.png" alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>99% SATISFIED CUSTOMERS</h5>
        <p>Our client's opinions speak for themselves</p>
    </div>

  </div>

  <div class="container-fluid d-flex imgicon">
  <div className='imageclass'>
    <img src="../assets/india-icon.png" alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>"MADE IN INDIA"</h5>
        <p>All the products are made in INDIA</p>
    </div>

  </div>

  <div class="container-fluid d-flex imgicon">
    <div className='imageclass'>
    <img src="../assets/guarranted-icon.png" alt="shippingicon" />
    </div>
    <div className='free faa'>
        <h5>ORIGINALITY GUARANTEED</h5>
        <p>30 days warranty for each product from our store</p>
    </div>

  </div>
</nav>
 </>
  )
}
