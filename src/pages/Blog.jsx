import React from 'react'
import BlogCard from '../components/BlogCard'
import blogdata from '../data/BlogData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Post1 from '../img/post_1.jpg.webp';
import Post2 from '../img/post_2.jpg.webp';
import Post3 from '../img/post_3.jpg.webp';
import Post4 from '../img/post_4.jpg.webp';
import Post5 from '../img/post_5.jpg.webp';
import Post6 from '../img/post_6.jpg.webp';
import Post7 from '../img/post_7.jpg.webp';
import Post8 from '../img/post_8.jpg.webp';
import Post9 from '../img/post_9.jpg.webp';
import Post10 from '../img/post_10.jpg.webp';



import { NavLink } from 'react-router-dom';



const Blog = () => {
  
    return (
        <div>
            <section className='container '>
                <div className='blog_hero'>
                    <h1 className='text-white'>Blog</h1>
                </div>
            </section>


            <section className='container my-5' id='blogs'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        {
                            blogdata.map((fd, i) => (
                                <BlogCard key={i} img={fd.img} day={fd.day} month={fd.month} title={fd.title} desc={fd.desc} comment={fd.comment} />
                            ))
                        }


                        <nav className='d-flex justify-content-center' id='pagination'>
                            <ul className="pagination">
                                <li className="page-item mx-2"><a className="page-link rounded-0" href="#"><FaChevronLeft /></a></li>
                                <li className="page-item mx-2"><a className="page-link" href="#">1</a></li>
                                <li className="page-item mx-2"><a className="page-link" href="#">2</a></li>
                                <li className="page-item mx-2"><a className="page-link rounded-0" href="#"><FaChevronRight /></a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-12 col-lg-4 " id='blog_right_sidebar'>
                        <div className="input-group rounded-0" id='blog_search'>
                            <input type="text" className="form-control rounded-0" placeholder="Search Keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn rounded-0" type="button" id="button-addon2">Search</button>
                        </div>


                        <div id='blog_category'>
                            <h4>Category</h4>
                            <ul className='list-unstyled'>
                                <li><a href="#">Resaurant food(37)</a></li>
                                <li><a href="#">Travel news(10)</a></li>
                                <li><a href="#">Modern technology(03)</a></li>
                                <li><a href="#">Product(11)</a></li>
                                <li><a href="#">Inspiration21</a></li>
                                <li className='border-0'><a href="#">Health Care (21)09</a></li>
                            </ul>
                        </div>



                        <div id='blog_recent_post'>
                            <h4>Recent Post</h4>

                            <div className="card mb-3 bg-transparent border-0 rounded-0 post_card" >
                                <div className="row g-0">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={Post1} className="img-fluid rounded-0" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body ps-2">
                                            <NavLink to="#" className="card-title fw-semibold post_title">From life was you fish...</NavLink>
                                            <p className="card-text"><small className="text-muted">January 12, 2019</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3 bg-transparent border-0 rounded-0 post_card" >
                                <div className="row g-0">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={Post2} className="img-fluid rounded-0" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body ps-2">
                                            <NavLink to="#" className="card-title fw-semibold post_title">The Amazing Hubble</NavLink>
                                            <p className="card-text"><small className="text-muted">02 Hours ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card mb-3 bg-transparent border-0 rounded-0 post_card" >
                                <div className="row g-0">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={Post3} className="img-fluid rounded-0" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body ps-2">
                                            <NavLink to="#" className="card-title fw-semibold post_title">Astronomy Or Astrology</NavLink>
                                            <p className="card-text"><small className="text-muted">03 Hours ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card mb-3 bg-transparent border-0 rounded-0 post_card" >
                                <div className="row g-0">
                                    <div className="col-3 d-flex align-items-center">
                                        <img src={Post4} className="img-fluid rounded-0" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body ps-2">
                                            <NavLink to="#" className="card-title fw-semibold post_title">Asteroids telescope</NavLink>
                                            <p className="card-text"><small className="text-muted">01 Hours ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div id='blog_tags'>
                            <h4>Tag Clouds</h4>
                            <ul className='list-unstyled'>
                                <li><a href="#">project</a></li>
                                <li><a href="#">love</a></li>
                                <li><a href="#">technology</a></li>
                                <li><a href="#">travel</a></li>
                                <li><a href="#">resaurant</a></li>
                                <li><a href="#">life style</a></li>
                                <li><a href="#">design</a></li>
                                <li><a href="#">illustration</a></li>
                            </ul>

                        </div>



                        <div id='blog_instagram_feeds'>
                            <h4>Instagram Feeds</h4>
                            <div className='d-flex flex-wrap justify-content-evenly'>
                                <img src={Post5} className="img-fluid" alt="" />
                                <img src={Post6} className="img-fluid" alt="" />
                                <img src={Post7} className="img-fluid" alt="" />
                                <img src={Post8} className="img-fluid" alt="" />
                                <img src={Post9} className="img-fluid" alt="" />
                                <img src={Post10} className="img-fluid" alt="" />
                            </div>
                        </div>


                        <div id='blog_newsletter'>
                            <h4>Newsletter</h4>


                            <div className="input-group d-flex flex-column rounded-0">
                                <input type="text" className="form-control rounded-0" required placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn rounded-0 mt-3" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div> 

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog