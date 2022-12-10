import React from "react";
// import bg from "./assets/black-and-white.png"

const HomePage = () => {
    return (
        <>
            <div className="h-[calc(100vh-20px)] mx-20 flex gap-6 items-center justify-center">
                <div className="text-white text-left w-1/2">
                    <p className="font-bold text-6xl">Innovative solution for your business</p>
                    <p className="text-5xl pt-5">A better way to</p>
                    <p className="text-bold text-4xl pt-2">transform your document</p>
                </div>
            
                <div className=" flex flex-nowrap gap-6 w-1/2  items-center justify-center">
                    <img src="./images/black-and-white.png"/>
                    {/* <img src={bg}/> */}
                </div>
            </div>
        </>
    )
}

export default HomePage;