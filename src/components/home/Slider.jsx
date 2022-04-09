import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import Slider1 from "./sliders/slider1";
import Slider2 from "./sliders/slider2";
import Slider3 from "./sliders/slider3";
import SliderBase from "./sliders/sliderBase";

const Slider = () => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={{ forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true}}
      autoHeight={true}

      pagination={{
 
        el: ".swiper-pagination"
      }}
      modules={[Mousewheel, Pagination]}
      className='mySwiper'>
      <SwiperSlide>
        <SliderBase sliderNumber={<Slider1 />} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBase sliderNumber={<Slider3 />} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBase sliderNumber={<Slider2 />} />
      </SwiperSlide>
   
      <div class="swiper-pagination"></div>
    </Swiper>

 
  );
};

export default Slider;
