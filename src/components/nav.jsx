import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { FaBars, FaFacebookSquare, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="px-4 h-auto bg-slate-200 lg:opacity-80 text-xl text-black">
                <div className="flex justify-between items-center mx-5 md:mx-0">
                    <div className='flex items-center'>
                        <FaBars onClick={toggleMenu} className="lg:hidden text-2xl cursor-pointer" />
                        <h1 className="logo me-auto lg:me-0 text-4xl text-black font-semibold ">
                            <a href="/home">DANIEL</a>
                        </h1>
                    </div>

                    <div className={`lg:flex px-10 py-5 items-center lg:space-x-16 absolute lg:relative block left-20 top-0 bg-slate-200 lg:bg-transparent font-semibold ${isOpen ? 'block' : 'hidden'}`}>
                        <a href="/home" className="block py-3">Home</a>
                        <a href="#about" className="block py-3">About</a>
                        <a href="#portfolio" className="block py-3">Portfolio</a>
                        <a href="#contact" className="block py-3">Contact</a>
                    </div>

                    <div className="flex space-x-5 text-xl">
                        <a href="#" className="">
                            <FaFacebookSquare />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                        <a href="#">
                            <FaTwitter />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Nav;
