import React from 'react';
import {FaBars} from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" id='navbar'>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto fw-bold bg-dark text-white fs-6 m-1 border-0 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      MENU <span className="navbar-toggler text-white p-0"><FaBars/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 page_list">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active page_title" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categories" className="nav-link active page_title" aria-current="page" >Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link active page_title" aria-current="page">About</NavLink>
                            </li>
                    
                           
                            {/* <li className="nav-item dropdown">
                                <NavLink to="#" className="nav-link active dropdown-toggle page_title" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </NavLink>
                                <ul className="dropdown-menu border-0 rounded-0 p-0 sub_page_list" style={{fontSize:"14px"}}>
                                    <li><Link className="dropdown-item p-2 page_title" to="/login">Login</Link></li>
                                    <li><a className="dropdown-item p-2 page_title" href="#">Cart</a></li>
                                    <li><a className="dropdown-item p-2 page_title" href="#">Checkout</a></li>
                                    <li><a className="dropdown-item p-2 page_title" href="#">Book Details</a></li>
                                    <li><a className="dropdown-item p-2 page_title" href="#">Blog Details</a></li>
                                </ul>
                            </li> */}

                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link active page_title" aria-current="page">Blog</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link active page_title" aria-current="page" >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         
        </div>
    )
}

export default Navbar