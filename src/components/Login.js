import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSigninForm] = useState(true);
    const toggleSignInForm = () => {
       setIsSigninForm(!isSignInForm);
      };


  return (
      <div>
    <Header/>
    <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
          srcset=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
         <input
        
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
         <button className="p-4 my-4 bg-red-700 w-full rounded-lg" >
           Sign in
           </button>
        <p className="py-4 cursor-pointer"  onClick={toggleSignInForm}  >
          New to Netflix? Sign Up Now
        </p>
    
      </form>
      </div>
     
  )
}

export default Login
