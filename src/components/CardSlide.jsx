import { NavLink } from 'react-router-dom';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import products from "../data/ProductsData";
const CardSlide = () => {
    return (
        <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },

                }}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper container py-5" id="card_slide" >
                {
                    products[0].map((fd, i) => (
                        <SwiperSlide key={i}>

                            <NavLink to={`/${fd.id}`} className="card border-0 rounded-0" id='product_cart'>
                                <img src={fd.img} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold" id='book_name'>{fd.name}</h5>
                                    <h6 className='text-secondary' id='author_name'>{fd.author}</h6>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span id='book_rating'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                            </span>
                                            <span className='text-secondary mt-1'>(<span className='text-warning'>120</span> Review)</span>
                                        </div>
                                        <div id='book_price'>{fd.price} $</div>
                                    </div>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default CardSlide;