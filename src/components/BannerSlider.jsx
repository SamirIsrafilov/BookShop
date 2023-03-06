
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BannerSlider = () => {
  return (
    <div style={{backgroundColor:"#fef4f4"}}>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container slider"
      >
        <SwiperSlide className="d-flex justify-content-center align-items-center flex-column" id="slide1">
            <span className="bg-white rounded-pill small px-3 py-1">Science Fiction</span>
            <h1 className="text-white my-4 fs-1 ">The History of Phipino</h1>
            <button className="btn text-white rounded-pill px-5 py-3 fw-semibold" style={{backgroundColor:"#f11616"}}>Browse Store</button> 
        </SwiperSlide>

        <SwiperSlide className="d-flex justify-content-center align-items-center flex-column" id="slide2">
            <span className="bg-white rounded-pill small px-3 py-1">Science Fiction</span>
            <h1 className="text-white my-4 fs-1 ">The History of Phipino</h1>
            <button className="btn text-white rounded-pill px-5 py-3 fw-semibold" style={{backgroundColor:"#f11616"}}>Browse Store</button> 
        </SwiperSlide>

        <SwiperSlide className="d-flex justify-content-center align-items-center flex-column" id="slide3">
            <span className="bg-white rounded-pill small px-3 py-1">Science Fiction</span>
            <h1 className="text-white my-4 fs-1 ">The History of Phipino</h1>
            <button className="btn text-white rounded-pill px-5 py-3 fw-semibold" style={{backgroundColor:"#f11616"}}>Browse Store</button> 
        </SwiperSlide>
 
        
      </Swiper>
    </div>
  )
}

export default BannerSlider