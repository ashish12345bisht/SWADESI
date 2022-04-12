import React from 'react'
import '../styles/Home.css'
import Slider from '../components/Slider'
import SingleSlideSlider from '../components/SingleSlideSlider'
import {bags} from '../data/bags'
import { shoes } from "../data/shoes";
import { dress } from "../data/dress";

function Home() {
  return (
    <div>
      <div className="homepage__banner">
        <div>
          <h2>DEALS ON SWADESI</h2>
        </div>
      </div>
      <Slider heading={"Recently Viewed"} oldPrice={"oldPrice"} data={dress} />
      <Slider heading={"Footwear"} oldPrice={""} data={shoes} />
      <SingleSlideSlider/>
      <Slider heading={"Bags"} oldPrice={"oldPrice"} data={bags} />
      <Slider heading={"Footwear"} oldPrice={""} data={shoes} />
    </div>
  );
}

export default Home