import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-7">
        <div>
          <input type="text" className=" bg-black text-white p-2 mr-3 rounded-md focus:outline-none focus:ring-2" placeholder="search data by id" />
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
    </>
  );
}

export default App;

