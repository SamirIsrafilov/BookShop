import React, { useState } from 'react';
import BannerSlider from '../components/BannerSlider';
import CardSlide from '../components/CardSlide';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Img1 from '../img/ad.jpg.webp';
import Img2 from '../img/best-books1.jpg.webp';
import products from '../data/ProductsData';
import ProductCart from '../components/ProductCart';




const Home = () => {
  const [all, setAll] = useState("d-flex");
  const [horror, setHorror] = useState("d-none");
  const [thriller, setThriller] = useState('d-none');
  const [fiction, setFiction] = useState('d-none');
  const [history, setHistory] = useState('d-none');


  const [color1, setColor1] = useState('#f11616');
  const [color2, setColor2] = useState('transparent');
  const [color3, setColor3] = useState('transparent');
  const [color4, setColor4] = useState('transparent');
  const [color5, setColor5] = useState('transparent');


  const [text1, setText1] = useState("white");
  const [text2, setText2] = useState("#454e6d");
  const [text3, setText3] = useState("#454e6d");
  const [text4, setText4] = useState("#454e6d");
  const [text5, setText5] = useState("#454e6d");








  return (
    <>
      <div>
        <BannerSlider />
      </div>
      <section className='py-5 best_selling'>
        <h2 className='text-center fw-semibold'>Best Selling Books Ever</h2>
        <div className=" mt-5">
          <div>
            <CardSlide />
          </div>
        </div>
      </section>


      <section className='container featured py-5 my-5'>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-9'>
            <h3 className='fw-semibold mb-3 '>Featured This Week</h3>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 100000,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper featured_slide"
            >
              <SwiperSlide className='p-4'>
                <div className='row'>
                  <div className='col-12 col-lg-5 d-flex justify-content-center'>
                    <img src={Img2} className="img-fluid" alt="" />
                  </div>
                  <div className='col-12 col-lg-7 mt-5 '>
                    <h1 className='text-white mb-3'>The Rage of Dragons</h1>
                    <h6 className='text-white mb-4'>By Evan Winter</h6>
                    <span className='text-white fs-2 fw-semibold mb-3'>$ 50.00</span>
                    <p className='text-white mb-5'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span className='small'>(120 Review)</span> </p>
                    <button className='btn  btn-outline-light  border rounded-pill py-3 px-5 fw-normal'>View Details</button >

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='p-4'>
                <div className='row'>
                  <div className='col-12 col-lg-5 d-flex justify-content-center'>
                    <img src={Img2} className="img-fluid" alt="" />
                  </div>
                  <div className='col-12 col-lg-7 mt-5 '>
                    <h1 className='text-white mb-3'>The Rage of Dragons</h1>
                    <h6 className='text-white mb-4'>By Evan Winter</h6>
                    <span className='text-white fs-2 fw-semibold mb-3'>$ 50.00</span>
                    <p className='text-white mb-5'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span className='small'>(120 Review)</span> </p>
                    <button className='btn  btn-outline-light  border rounded-pill py-3 px-5 fw-normal'>View Details</button >

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='p-4'>
                <div className='row'>
                  <div className='col-12 col-lg-5 d-flex justify-content-center'>
                    <img src={Img2} className="img-fluid" alt="" />
                  </div>
                  <div className='col-12 col-lg-7 mt-5 '>
                    <h1 className='text-white mb-3'>The Rage of Dragons</h1>
                    <h6 className='text-white mb-4'>By Evan Winter</h6>
                    <span className='text-white fs-2 fw-semibold mb-3'>$ 50.00</span>
                    <p className='text-white mb-5'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span className='small'>(120 Review)</span> </p>
                    <button className='btn  btn-outline-light  border rounded-pill py-3 px-5 fw-normal'>View Details</button >

                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>


          <div className='col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
            <img src={Img1} className="img-fluid" alt="" />
          </div>
        </div>

      </section>


      <section className='container latest_published my-5'>
        <div className='d-flex justify-content-between flex-wrap mb-4'>
          <h2>Latest Published items</h2>
          <ul className='list-unstyled d-flex'>
            <li><button className='btn rounded-pill px-4'
              onClick={() => {
                setAll('d-flex');
                setHorror('d-none');
                setThriller('d-none');
                setFiction("d-none");
                setHistory("d-none");
                setColor1("#f11616");
                setColor2("transparent");
                setColor3("transparent");
                setColor4("transparent");
                setColor5("transparent");
                setText1('#fff');
                setText2('#454e6d');
                setText3('#454e6d');
                setText4('#454e6d');
                setText5('#454e6d');
              }}
              style={{ backgroundColor: color1, color: text1 }}
            >All</button ></li>
            <li><button className='btn rounded-pill px-4'
              onClick={() => {
                setAll('d-none');
                setHorror('d-flex');
                setThriller('d-none');
                setFiction("d-none");
                setHistory("d-none");
                setColor1("transparent");
                setColor2("#f11616");
                setColor3("transparent");
                setColor4("transparent");
                setColor5("transparent");
                setText1('#454e6d');
                setText2('#fff');
                setText3('#454e6d');
                setText4('#454e6d');
                setText5('#454e6d');
              }}
              style={{ backgroundColor: color2, color: text2 }}
            >Horror</button ></li>
            <li><button className='btn rounded-pill px-4'
              onClick={() => {
                setAll('d-none');
                setHorror('d-none');
                setThriller('d-flex');
                setFiction("d-none");
                setHistory("d-none");
                setColor1("transparent");
                setColor2("transparent");
                setColor3("#f11616");
                setColor4("transparent");
                setColor5("transparent");
                setText1('#454e6d');
                setText2('#454e6d');
                setText3('#fff');
                setText4('#454e6d');
                setText5('#454e6d');
              }}
              style={{ backgroundColor: color3, color: text3 }}
            >Thriller</button ></li>
            <li><button className='btn rounded-pill px-4'
              onClick={() => {
                setAll('d-none');
                setHorror('d-none');
                setThriller('d-none');
                setFiction("d-flex");
                setHistory("d-none");
                setColor1("transparent");
                setColor2("transparent");
                setColor3("transparent");
                setColor4("#f11616");
                setColor5("transparent");
                setText1('#454e6d');
                setText2('#454e6d');
                setText3('#454e6d');
                setText4('#fff');
                setText5('#454e6d');
              }}
              style={{ backgroundColor: color4, color: text4 }}
            >Science Fiction</button ></li>
            <li><button className='btn rounded-pill px-4'
              onClick={() => {
                setAll('d-none');
                setHorror('d-none');
                setThriller('d-none');
                setFiction("d-none");
                setHistory("d-flex");
                setColor1("transparent");
                setColor2("transparent");
                setColor3("transparent");
                setColor4("transparent");
                setColor5("#f11616");
                setText1('#454e6d');
                setText2('#454e6d');
                setText3('#454e6d');
                setText4('#454e6d');
                setText5('#fff');
              }}
              style={{ backgroundColor: color5, color: text5 }}
            >History</button ></li>
          </ul>

        </div>



        <div className={`row ${all}`}>
          {
            products[1].map((fd, i) => (
              <div className='col-12 col-sm-6 col-md-4 col-xl-2' key={i}>
                <ProductCart  img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id}  />
              </div>
            ))
          }
        </div>

        <div className={`row ${horror}`}>
          {
            products[2].map((fd, i) => (
              <div className='col-12 col-sm-6 col-md-4 col-xl-2' key={i}>
                <ProductCart  img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id} />
              </div>
            ))
          }
        </div>

        <div className={`row ${thriller}`}>
          {
            products[3].map((fd, i) => (
              <div className='col-12 col-sm-6 col-md-4 col-xl-2' key={i}>
                <ProductCart  img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id} />
              </div>
            ))
          }
        </div>

        <div className={`row ${fiction}`}>
          {
            products[4].map((fd, i) => (
              <div className='col-12 col-sm-6 col-md-4 col-xl-2' key={i}>
                <ProductCart  img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id} />
              </div>
            ))
          }
        </div>

        <div className={`row ${history}`}>
          {
            products[2].map((fd, i) => (
              <div className='col-12 col-sm-6 col-md-4 col-xl-2' key={i}>
                <ProductCart  img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id} />
              </div>
            ))
          }
        </div>


        <div className='text-center mt-4'>
          <button className='btn rounded-pill py-3 px-5 fw-normal' id='browse_btn'>Browse More</button >
        </div>
      </section>



      <section className='container my-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 mt-2'>
            <div className=' d-flex justify-content-between flex-column flex-md-row' id='history_phipino'>
              <h2 className='text-white'>The History <br />
                of Phipino</h2>
              <button className='btn rounded-pill text-white'>View Details</button>

            </div>
          </div>
          <div className='col-12 col-lg-6 mt-2'>
            <div className='d-flex justify-content-between flex-column flex-md-row' id='wilma_mumduya'>
              <h2 className='text-white'>Wilma Mumduya</h2>
              <button className='btn rounded-pill text-white'>View Details</button>
            </div>
          </div>
        </div>
      </section>


      <section className='container my-5 py-5' id='newsletter'>
        <div className='d-flex flex-column align-items-center'>
          <h1>Join Newsletter</h1>
          <p className='text-center my-3'>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective <br /> was to ensure pure water and affordable irrigation.</p>
          <div className='d-flex align-items-center flex-column flex-md-row'>
            <input type="email" className='rounded-pill border-0 py-2 px-4 mt-2' placeholder='Enter your email' />
            <button className='btn rounded-pill ms-2 mt-2 py-2 px-4'>Subscribe</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home