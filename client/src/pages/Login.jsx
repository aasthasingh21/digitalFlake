import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import API_URLS from '../services/api.urls';

const Login = () => {

  const loginUser = useApi(API_URLS.login);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    const response = await loginUser.call(formData);
    const token = response.data.token;
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Login</h2>,
        {isLoggedIn ? ( 
          <Link to="/" />
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-right">
              <a href="/reset" className="text-purple-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
