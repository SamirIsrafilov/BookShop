import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';



const ProductCart = ({img,title,author,price,fd}) => {
    return (
      
            <NavLink to={`/${fd}`} className="card border-0 rounded-0  mt-2" id='product_cart'>
               <div className='border'>
               <img src={img} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold" id='book_name'>{title}</h5>
                    <h6 className='text-secondary' id='author_name'>{author}</h6>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column'>
                            <span id='book_rating'>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                            </span>
                            <span className='text-secondary mt-1'>(<span className='text-warning'>120</span> Review)</span>
                        </div>
                        <div id='book_price'>{price} $</div>
                    </div>
                </div>
               </div>
            </NavLink>
      
    )
}

export default ProductCart