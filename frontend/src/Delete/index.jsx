import { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/delete/${id}`)
      console.log(response.data);
      setMessage('Deleted sucessfully!'); 
      setId('');
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Failed to delete. Please check the ID.');
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="bg-slate-700 rounded-lg p-8 w-1/3">
        <h2 className="text-white text-2xl mb-6 text-center">Delete Data</h2>
        <div>
          <label htmlFor="id" className="text-white mb-2 block">Id</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID"
            className="w-full p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      
        <button className="w-full mt-6 p-2 bg-green-500 rounded-md hover:bg-green-600 transition duration-200">Delete</button>
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

export default Delete;
