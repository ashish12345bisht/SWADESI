import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SingleSlideSlider() {
  return (
    <div className="single__slide__slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div>
            <div className="homepage__slider__2">
              <div>
                <h2>DEALS ON SWADESI</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage__slider__2">
            <div>
              <h2>DEALS ON SWADESI</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage__slider__2">
            <div>
              <h2>DEALS ON SWADESI</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SingleSlideSlider