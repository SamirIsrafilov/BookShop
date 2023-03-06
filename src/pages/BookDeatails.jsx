import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaShareAlt, FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import BookData from '../data/BookData';
import { useCart } from 'react-use-cart';
import alertify from 'alertifyjs';




const BookDeatails = (props) => {
    const { addItem } = useCart();

    const [desc, setDesc] = useState("d-flex");
    const [author, setAuthor] = useState("d-none");
    const [comment, setComment] = useState('d-none');
    const [review, setReview] = useState('d-none');



    const [color1, setColor1] = useState('#f11616');
    const [color2, setColor2] = useState('transparent');
    const [color3, setColor3] = useState('transparent');
    const [color4, setColor4] = useState('transparent');



    const [text1, setText1] = useState("white");
    const [text2, setText2] = useState("#454e6d");
    const [text3, setText3] = useState("#454e6d");
    const [text4, setText4] = useState("#454e6d");




    const { productId } = useParams()
    const product = BookData.find(prod => prod.id === productId)

    return (
        <div className='container'>


            <div>
                <div className="card mb-3 rounded-0 mt-5" id="book_details">
                    <div className="row g-0">
                        <div className="col-lg-3">
                            <img src={product.img} className="img-fluid rounded-0" alt="..." />
                        </div>
                        <div className="col-lg-9">
                            <div className="card-body ">
                                <h1 className="card-title mt-3" id="book_title">{product.name}</h1>
                                <p className="card-text" id="book_author"><small className="text-white">{product.author}</small></p>
                                <p className="card-text" id='book_price'>{product.price} $</p>
                                <p className='text-white mb-5 fs-5'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <small className='fs-6'>(120 Review)</small> </p>
                                <div className='d-flex align-items-center'>
                                    <button className='btn  btn-outline-light me-3  border rounded-pill py-3 px-5 fw-normal' id='addtocart_btn'
                                    onClick={() => (addItem(product),alertify.success(product.name + ` Added To Cart`))}
                                    >Add To Cart</button >

                                    <div>
                                        {/* Button trigger modal */}
                                        <button type="button" className="btn " data-bs-toggle="modal" id='share_btn' data-bs-target="#exampleModal">
                                            <FaShareAlt />
                                        </button >
                                        {/* Modal */}
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Share</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                    </div>
                                                    <div className="modal-body py-5" id='social_share'>
                                                        <button className='btn'><FaFacebookF /></button>
                                                        <button className='btn'><FaInstagram /></button>
                                                        <button className='btn'><FaPinterestP /></button>
                                                        <button className='btn'><FaLinkedinIn /></button>
                                                        <button className='btn'><FaYoutube /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='container  my-5'>

                <ul className='list-unstyled d-flex flex-wrap'>
                    <li className='me-2 mt-1'><button className='btn border rounded-pill px-4'
                        onClick={() => {
                            setDesc('d-flex');
                            setAuthor('d-none');
                            setComment('d-none');
                            setReview("d-none");

                            setColor1("#f11616");
                            setColor2("transparent");
                            setColor3("transparent");
                            setColor4("transparent");

                            setText1('#fff');
                            setText2('#454e6d');
                            setText3('#454e6d');
                            setText4('#454e6d');

                        }}
                        style={{ backgroundColor: color1, color: text1 }}
                    >Descreption</button ></li>
                    <li className='me-2 mt-1'><button className='btn border rounded-pill px-4'
                        onClick={() => {
                            setDesc('d-none');
                            setAuthor('d-flex');
                            setComment('d-none');
                            setReview("d-none");

                            setColor1("transparent");
                            setColor2("#f11616");
                            setColor3("transparent");
                            setColor4("transparent");

                            setText1('#454e6d');
                            setText2('#fff');
                            setText3('#454e6d');
                            setText4('#454e6d');
                        }}
                        style={{ backgroundColor: color2, color: text2 }}
                    >Author</button ></li>

                    <li className='me-2 mt-1'><button className='btn border rounded-pill px-4'
                        onClick={() => {
                            setDesc('d-none');
                            setAuthor('d-none');
                            setComment('d-flex');
                            setReview("d-none");

                            setColor1("transparent");
                            setColor2("transparent");
                            setColor3("#f11616");
                            setColor4("transparent");

                            setText1('#454e6d');
                            setText2('#454e6d');
                            setText3('#fff');
                            setText4('#454e6d');
                        }}
                        style={{ backgroundColor: color3, color: text3 }}
                    >Comments</button ></li>


                    <li className='me-2 mt-1'><button className='btn border rounded-pill px-4'
                        onClick={() => {
                            setDesc('d-none');
                            setAuthor('d-none');
                            setComment('d-none');
                            setReview("d-flex");

                            setColor1("transparent");
                            setColor2("transparent");
                            setColor3("transparent");
                            setColor4("#f11616");

                            setText1('#454e6d');
                            setText2('#454e6d');
                            setText3('#454e6d');
                            setText4('#fff');
                        }}
                        style={{ backgroundColor: color4, color: text4 }}
                    >Review</button ></li>
                </ul>


                <div className={`my-5 ${desc}`}>
                    <p className='text-secondary'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying
                        themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to
                        secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door
                        neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year
                        before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                        showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                        birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant
                        expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and <br /><br />

                        It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and
                        Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college
                        are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking
                        practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                </div>

                <div className={`my-5 ${author}`}>
                    <p className='text-secondary'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying
                        themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to
                        secr <br /><br />

                        It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and
                        Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college
                        are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking
                        practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                </div>

                <div className={`my-5 ${comment}`}>
                    <p className='text-secondary'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying
                        themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to
                        showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                        birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant
                        expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and <br /><br />

                        It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and
                        Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college
                        are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking
                        practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.</p>
                </div>



                <div className={` my-5 ${review}`}>
                    <p className='text-secondary'>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying
                        themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to
                        secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door
                        neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year
                        before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                        showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                        birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant
                        expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and <br /><br /></p>
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


        </div>
    )
}

export default BookDeatails