import React from 'react';
import { Outlet } from "react-router-dom";
import { FaFacebookSquare,FaYoutube,FaTwitter,FaInstagram  } from "react-icons/fa";

const Nav = () => {
    return (
        <>
           <nav className="p-4 h-20 bg-slate-200 opacity-80 text-xl text-black">
            <div className="flex justify-between items-center mx-5 md:mx-0">
                <div>
                <h1 className="logo me-auto lg:me-0 text-4xl text-black font-semibold "><a href="/home">DANIEL</a></h1>
                </div>
 
                <div className="flex space-x-20  font-semibold">
                    <a href="/home" className="lg:block py-3">Home</a>
                    <a href="#about" className="lg:block py-3">About</a>
                    <a href="#portfolio" className="lg:block py-3">Portfolio</a>
                    <a href="#contact" className="lg:block py-3">Contact</a>
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

