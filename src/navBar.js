import React from "react";

const NavBar = () => {
    return(
        <>
            <nav className="flex items-center justify-between flex-wrap p-4 h-[20px]">
                
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 w-6 h-6">
                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 
                        0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 
                        2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>

                    <span className="text-white text-lg tracking-tight"> DocManager </span>
                </div>
                
                <div className="block lg:hidden">
                    
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 
                    6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    
                    <div className="text-sm lg:flex-grow">
                    
                    <a href="#" className="block lg:inline-block lg:mt-0 text-gray-100 hover:text-gray-100 mr-8">
                        Home
                    </a>
                    
                    <a href="#" className="block lg:inline-block lg:mt-0 text-gray-100 hover:text-gray-100 mr-6">
                        Upload
                    </a>
                    </div>
                    
                    <div>
                        <a href="#" className="mx-4 inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 hover:text-gray-400 
                        hover:bg-gray-100 mt-4 lg:mt-0"> Login </a>
                    </div>
                    
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-100 border-gray-100 hover:text-gray-400 
                        hover:bg-gray-100 mt-4 lg:mt-0"> SignUp </a>
                    </div>
                </div>
            </nav>        
        </>
    )
}

export default NavBar;