import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center ">
      <form action="post" className="bg-slate-700 rounded-lg  p-8 w-1/3">
        <h2 className="text-white text-2xl mb-6 text-center">Sign Up</h2>
        <div>
          <label htmlFor="username" className="text-white mb-2 block">Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-white mb-2 block">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-white mb-2 block">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <button className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
