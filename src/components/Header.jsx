import React from 'react';
import Logo from '../img/logo.png.webp'
import { BiSearch } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const Header = () => {
    const { totalItems } = useCart();


    const getName = localStorage.getItem('name');

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <header className='container py-4 d-flex justify-content-between'>

            <Link to="/" className='d-flex justify-content-center align-items-center' id='header_logo'>
                <img src={Logo} alt="" />
            </Link>
            <div className='border rounded-pill d-flex align-items-center justify-content-between' id='search_box'>
                <input className='border-0 p-0' type="text" placeholder='Search book by author or publisher' id='search_input' />
                <span id='search_icon'><BiSearch /></span>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <NavLink to="/cart" type="button" className="btn border-0 p-0 position-relative mt-2">
                    <BsCart className='fs-2' />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                </NavLink>

                <NavLink to="/login" className='btn p-0 rounded-pill ms-5' id='header_btn'>Sign in</NavLink>
                <div className="dropdown d-flex align-items-center" id='user'>
                    <button className="btn border rounded-circle ms-3 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUser />
                    </button>
                    <span className='ms-1' style={{ fontSize: "12px" }}>{getName}</span>
                    <ul className="dropdown-menu">
                        <li><NavLink to="#" className='btn border-0 text-uppercase py-2 ' onClick={handleClick} >Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header