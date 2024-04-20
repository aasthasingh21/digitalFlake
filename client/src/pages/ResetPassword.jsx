import React from 'react';
import { useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send reset link
    console.log('Reset link sent to:', email);
    // Reset the email field
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <a
            href='/login'
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Send Reset Link
          </a>
        </form>
        <div className="mt-4">
          <a href="/login" className="text-purple-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
