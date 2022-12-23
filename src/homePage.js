import React from "react";
// import bg from "./assets/black-and-white.png"

const HomePage = () => {
    return (
        <>
            <div className="lg:h-[calc(90vh-18px)] lg:mx-20 mx-8 lg:my-5 my-16 md:flex gap-6 items-center ml-4 justify-center">
                <div className="">
                    <p className="text-purple-300 font-bold text-4xl lg:w-full lg:text-6xl"> Innovative solution for your business </p>
                    <p className="text-white lg:text-5xl text-4xl pt-5"> A better way to </p>
                    <p className="text-white text-bold lg:text-4xl text-2xl pt-2"> transform your document </p>
                    
                    <div className="">
                        <input className="rounded my-8 p-1 lg:w-1/2 w-5/6" placeholder=" Subscribe our Newsletter!"/> <br/>
                        <button className="bg-gray-100 rounded p-1 px-4 lg:w-1/6 font-bold text-purple-600"> Subscribe Now </button>
                    </div>
                </div>
        
            <div className="lg:flex lg:flex-nowrap lg:gap-6 lg:w-1/2 w-3/5 lg:mt-0 mt-7 items-left justify-center">
                <img src="./images/black-and-white.png"/>
                {/* <img src={bg}/> */}
            </div>
            </div>
        </>
    )
}

export default HomePage;