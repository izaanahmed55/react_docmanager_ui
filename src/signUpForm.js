import React, { useState } from "react";

const SignUpForm = () => {

    const [userRegistration, setUserRegistration] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: ""
    })

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setUserRegistration({...userRegistration, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userRegistration, id: new Date().getTime().toString()}

        setRecords([...records, newRecord])
        console.log(records)

        setUserRegistration({fullname: "", email: "", phone: "", password: ""})
    }


    return(
        <>
            <center>
                <div className="bg-white py-20 my-10 w-2/6 rounded-xl">
                    
                    <h2 className='text-2xl font-bold'> SIGN UP </h2>
                        
                        <form action="" onSubmit={handleSubmit}>
                            <div className='text-gray-500 font-semibold text-base mt-5'>
                                <label htmlFor="username"> Full Name </label>
                            </div>
                            <div>
                                <input className='border-b-2 rounded-md px-8' value={userRegistration.fullname} onChange={handleInput} autoComplete="off" placeholder="Type your full name here" typeof="text" name="" id=""/>
                            </div>

                            <div className='text-gray-500 font-semibold text-base mt-5'>
                                <label htmlFor="email"> Email </label>
                            </div>
                            <div>
                                <input className='border-b-2 rounded-md px-8' value={userRegistration.email} onChange={handleInput} autoComplete="off" placeholder="Type your email here" typeof="text" name="" id=""/>
                            </div>

                            <div className='text-gray-500 font-semibold text-base mt-5'>
                                <label htmlFor="phone"> Phone </label>
                            </div>
                            <div>
                                <input className='border-b-2 rounded-md px-8' value={userRegistration.phone} onChange={handleInput} autoComplete="off" placeholder="Type your phone number here" typeof="text" name="" id=""/>
                            </div>

                            <div className='text-gray-500 font-semibold text-base mt-5'>
                                <label htmlFor="password"> Password </label>
                            </div>
                            <div>
                                <input className='border-b-2 rounded-md px-8' value={userRegistration.password} onChange={handleInput} autoComplete="off" placeholder="Type your password here" typeof="text" name="" id=""/>
                            </div>

                            <button className='bg-clr my-10 rounded-2xl px-14 py-1 text-gray-200 font-semibold' type='submit'> Sign Up </button>
                                    
                    </form>
                </div>

                <div>
                    {
                        records.map((currElem) => {
                            const {fullname, email, phone, password} = currElem;

                            return (
                                <div className='showDataStyle'>
                                    <p>Fullname: {fullname} Email: {email} Phone:{phone} Password: {password}</p>
                                </div>   
                            )
                        })
                    }
                </div>
            </center>
        </>
    );
}

export default SignUpForm;