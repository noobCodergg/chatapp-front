import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from './Card';

function Home() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem('id'); 

  useEffect(() => {
    axios.get('http://localhost:8000/getalluser')
      .then(res => setUser(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">Welcome to the Home Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {user
            .filter(item => item.id !== id) 
            .map(item => (
              <Link key={item.id} to={`/${item.id}`} className="block rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <Card data={item} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
