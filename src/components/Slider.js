import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from './Card'

function Slider({heading,oldPrice,data}) {
  return (
    <div className="slider">
      <h2>{heading}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={5}
        navigation
      >
        {data.map(({ key, url }) => {
          return (
            <SwiperSlide key={key}>
              <Card oldPrice={oldPrice} url={url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider