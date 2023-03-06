import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <div>
            <nav>
                <Header />
                <Navbar />
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout