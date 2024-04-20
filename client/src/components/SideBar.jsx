import React from 'react';
import SIDEBAR_DATA from '../config/sidebar';
import { IoMdArrowDropright } from "react-icons/io";

const SideBar = () => {
  return (
    <>
        <div className="sidebar" style={{ width: '25%', height: '100vh', backgroundColor: '#FAF9F6' }}>
            <ul className="list-unstyled" style={{fontSize: '25px', gap: '100px'}}>
                {
                    SIDEBAR_DATA.map(data => ( // sidebar data is in the form of all so we make use of mapping(while using mapping we need to provide an unique key to each components)
                        <a href={data.route} key={data.name}>
                           
                            <li style={{
                                    display: 'flex',
                                    alignItems: 'center', // Align items vertically in the center
                                    gap: '10px', // Gap between items
                                    marginLeft: '10px',
                                    marginBottom: '25px',
                                    backgroundColor: data === data.route.toLocaleLowerCase() ? '#d3e3fd' : 'transparent',
                                    borderRadius: data === data.route.toLocaleLowerCase() ? '0 16px 16px 0' : '0',
                                }}>                                                 
                                <data.icon fontSize='large' />
                                {data.title}
                                <IoMdArrowDropright style={{ marginLeft: 'auto' }} /> {/* Align right */}
                            </li>

                        </a>
                    ))
                }
            </ul>
        </div>

    </>
  )
}

export default SideBar;
