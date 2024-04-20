import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen'>
      <NavBar/>
      <div className='flex flex-row border rounded-md shadow-purple-400 overflow-hidden'>
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home;
