import React from 'react';
import { useState } from 'react';
import useApi from '../hooks/useApi';
import API_URLS from '../services/api.urls';

function Register() {
  const registerUser = useApi(API_URLS.register);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => { // to change the data for new value to be added in
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    await registerUser.call(formData);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
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
              type="text" // is to see the password
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            </div>
          <button type='submit'
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;



