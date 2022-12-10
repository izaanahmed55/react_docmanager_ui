import React from "react";
// import bg from "./assets/black-and-white.png"

const HomePage = () => {
    return (
        <>
            <div className="h-[calc(90vh-18px)] mx-20 flex gap-6 items-center justify-center">
                <div className="text-left w-1/2">
                    <p className="text-blue-300 font-bold text-6xl">Innovative solution for your business</p>
                    <p className="text-white text-5xl pt-5">A better way to</p>
                    <p className="text-white text-bold text-4xl pt-2">transform your document</p>
                    
                    <div>
                        <input className="rounded my-8 p-1 w-1/2" placeholder=" Subscribe our Newsletter!"/> <br/>
                        <button className="bg-gray-300 rounded p-1 w-1/6 font-bold text-blue-700"> Subscribe Now </button>
                    </div>

                </div>
            
                <div className="flex flex-nowrap gap-6 w-1/3  items-center justify-center">
                    <img src="./images/black-and-white.png"/>
                    {/* <img src={bg}/> */}
                </div>
            </div>
        </>
    )
}

export default HomePage;