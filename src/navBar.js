import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [navbar, setNavbar] = useState(false)
    
    return(
        <>
            <nav className="flex items-center flex-row justify-between flex-wrap bg-gray-200 p-4">
                <div className="flex items-center flex-auto text-black mr-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" /></svg>

                    <span className="px-2 font-semibold text-xl text-black tracking-tight">DocManager</span>
                </div>
                <div className="block lg:hidden" >
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-gray-400 hover:text-white hover:border-white"  onClick={()=>setNavbar(!navbar)}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={`w-full ${navbar? "block" : "hidden"}  flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-md lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/upload" className="block text-md mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                        Upload
                    </Link>
                    </div>
                    <div>
                        <Link to="/loginform" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                            Login
                        </Link> 
                        <Link to="/signupform" className="inline-block text-md px-4 py-2 leading-none border rounded text-gray-500 border-white hover:border-transparent 
                        hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;