import React from "react";
import img1 from "../../../resurce/img1.jpg"
import img2 from "../../../resurce/img2.jpg"
import img3 from "../../../resurce/img3.jpg"
import "./HomeBannerSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeBannerSlider = () => {

    const sliderImages=[{id:1, img:img1},{id:2, img:img2},{id:3, img:img3},]
  return (
    <div className='sm-mt-3'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >

          {

sliderImages.map(x=>  <SwiperSlide key={x.id}>
    <img className="slider-image-style" src={x.img} alt="" />
  </SwiperSlide>)
          }
      </Swiper>
    </div>
  );
};

export default HomeBannerSlider;