import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      console.log(response.data);
      setMessage('Login successful!'); 
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Login failed. Please check your credentials.'); 
    }
    setEmail(''); 
    setPassword(''); 
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-700 rounded-lg shadow-lg p-8 w-1/3">
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
        <div>
          <label htmlFor="email" className="text-white mb-2 block">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-white mb-2 block">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400" 
          />
        </div>
        <button type="submit" className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">Submit</button>
        {
          <div className="mt-4 text-center">
            <p className="text-white bg-black p-2 rounded">
              {message}
            </p>
          </div>
        }
      </form>
    </div>
  );
}

export default Login;
