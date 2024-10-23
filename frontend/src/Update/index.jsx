import { useState } from 'react';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/update/${id}`, {
        username,
        password,
      });
      console.log(response.data);
      setMessage('Updated successfully!'); 
      setId('');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Please check the ID and no space id.');
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="bg-slate-700 rounded-lg p-8 w-1/3">
        <h2 className="text-white text-2xl mb-6 text-center">Update Data</h2>
        <div>
          <label htmlFor="id" className="text-white mb-2 block">Id</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID no space"
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div>
          <label htmlFor="username" className="text-white mb-2 block">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-white mb-2 block">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">Update</button>
        {message && (
          <div className="mt-4 text-center">
            <p className="text-white bg-black p-2 rounded">
              {message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Update;
