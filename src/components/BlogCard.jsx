import React from 'react';
import {FaUserAlt,FaComment} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const BlogCard = ({img,day,month,title,desc,comment}) => {
    return (
        <div>
            <div className="card mb-5 border-0 rounded-0" id='blog_card'>
                <div className='mb-5' id='blog_img'>
                    <img src={img} className="card-img-top rounded-0" alt="..." />
                    <a className=' fs-3'>
                        <h5>{day}</h5>
                        <p>{month}</p>
                    </a>
                </div>
                <div className="card-body p-4" id='blog_info'>
                    <NavLink to="#" id='blog_title' className="card-title">{title}</NavLink>
                    <p className="card-text mt-3">{desc}</p>
                    <ul className='list-unstyled d-flex mt-4'>
                        <li><a href="#"><FaUserAlt/> Travel, Lifestyle</a></li>
                        <li><a href="#"><FaComment/>  {comment} Comments</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogCard