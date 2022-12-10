import React, {useState} from 'react'

const LoginForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault();

        if(email && password){
            // console.log('inside')
            const newEntry = {id: new Date().getTime().toString(), email: email, password: password};
            console.log(newEntry);
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setEmail("");
            setPassword("");
        }

        else{
            alert('Please Enter email and password');
        }
    }

  return (
    <>  
    <center>
        <div className='bg-white py-20 my-10 w-1/4 rounded-xl'>
            <h2 className='text-2xl p-7 font-bold'> LOGIN </h2>

            <form action='' onSubmit={submitForm}>

                <div className='formlabels font-semibold text-base mt-5'>
                    <label htmlFor='email'> Email </label>
                </div>

                <div>
                    <input className='border-b-2 rounded-md px-8' type='email' placeholder='Type your email here' name='email' id='email' autoComplete='off'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='formlabels font-semibold text-base mt-5'>
                    <label htmlFor='password'> Password </label>
                </div>

                <div>
                    <input className='border-b-2 rounded-md px-8' type='password' placeholder=' Type your password here' name='password' id='password' autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <button className='bg-clr my-10 rounded-2xl px-14 py-1 text-white font-semibold' type='submit'> Login </button>
                
                <br></br>
                <a href='#' className='underline text-xs'>forgot password?</a>

                <p className='text-gray-500 font-semibold text-base mt-5'>Sign Up using</p>
                <br></br>
                
                <div className='flex justify-center space-x-4 text-gray-700'>
                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                    </a>

                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5">\
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                        </svg>
                    </a>

                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                        </svg>
                    </a>

                </div>
            
            
            </form>
        
        </div>

        <div>
            {
                allEntry?.map((curElem) => {
                    const {id, email, password} = curElem;
                    
                    return (
                        <div className='showDataStyle' key={id}>
                            <p>Id: {id} Email: {email} Password: {password}</p>
                        </div>
                    )
                })
            }
        </div> 
        </center>
    </>
  );
}

export default LoginForm;
