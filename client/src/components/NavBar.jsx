import React from "react";
import { VscAccount } from "react-icons/vsc";

const NavBar = ({ handleLogout }) => {

  const logout = () => { // logout function
    handleLogout();
  }

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "purple" }}>
        <div className="container-fluid ">
           <div className="d-flex align-items-center">
              <img src="/top-logo.png" alt="Logo" width="60" height="40" />

              <p className="digitalflake text-white text-center pt-2 fs-4">
                <span className="fw-bold">digital</span>flake
              </p>
            
            </div>
            <div className="icon" onClick={logout}>
              <VscAccount style={{ color: 'white', fontSize: '30px'}} />
            </div>    
        </div>
      </nav>

      {logout}
    </>
  );
};

export default NavBar;
