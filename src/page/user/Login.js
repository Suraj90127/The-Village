import React from "react";
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <>
   <div className="container-section  ">
  
<div className="bg-white relative lg:py-20">
  <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
xl:px-5 lg:flex-row">
    <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
      <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
          <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" className="btn-" />
        </div>
      </div>
      <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
      relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign in for an account</p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
           
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md" />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
            absolute">Password</p>
              <input placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-gray-300 rounded-md" />
            </div>

        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
  <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
  <label className="inline-flex items-center cursor-pointer"><input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" /><span className="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span></label>
  </div>
  <div className="w-full lg:w-auto px-4"><Link className="inline-block font-extrabold hover:underline" to="">Forgot your password?</Link></div>
</div>


            <div className="relative">
              <Link className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
            rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</Link>
            </div>
            <p class="text-center font-extrabold">Don&rsquo;t have an account? <Link class="text-red-500 hover:underline" to="/sign-up">Sign up</Link></p>
          </div>
        </div>
     
      
      </div>
    </div>
  </div>
</div>
   </div>
    </>
  );
};

export default Login;
