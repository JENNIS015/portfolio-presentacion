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
import SliderBase from "./sliders/sliderBase";

const Slider = () => {

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className='mySwiper'>

        <SwiperSlide>
          <SliderBase sliderNumber={<Slider1/>} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderBase sliderNumber={<Slider2 />} />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Slider;
