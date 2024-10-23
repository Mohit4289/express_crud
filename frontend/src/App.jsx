import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function App() {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    axios.get("/api/users")
    .then((response) => {
      setDatabase(response.data.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-7">
        <div>
          <input 
            type="text" 
            className="bg-black text-white p-2 mr-3 rounded-md focus:outline-none focus:ring-2" 
            placeholder="search data by id" 
          />
          <button type="submit" className="bg-green-500 rounded-md p-2">Search</button>
        </div>
        <button>
          <Link to="/signup" className="bg-blue-500 p-2 font-bold rounded-md">
            Signup
          </Link>
        </button>
        <button>
          <Link to="/login" className="bg-blue-500 p-2 font-bold rounded-md">
            Login
          </Link>
        </button>
      </div>
      
      {database.length > 0 ? (
        <div>
          {database.map((base,index) => (
            <div key={base.id} className="p-3 border-b border-gray-300">
              <h1>Username: {base.username}</h1>
              <h1>Email: {base.email}</h1>
              <h1>Password: {base.password}</h1> 
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}

export default App;
