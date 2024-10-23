import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <form action="post" className="bg-slate-700 rounded-lg shadow-lg p-8 w-1/3">
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
        <div>
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
            placeholder="Enter your password" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <button className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">Submit</button>
      </form>
    </div>
  );
}

export default Login;
