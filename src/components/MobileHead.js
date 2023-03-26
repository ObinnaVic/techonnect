import React from 'react'
import { Outlet } from 'react-router-dom';
import Logo from "../images/MainLogo.png";

function MobileHead({ setMobileNav }) {
  const OpenNav = () => {
    setMobileNav(true);
  };


  return (
    <div>
      <div className="nav fixed bg-black w-full flex items-center justify-between md:hidden">
        <img src={Logo} alt="logo" className="w-24 m-2" loading="eager" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          fill="currentColor"
          className="bi bi-list text-white"
          viewBox="0 0 16 16"
          onClick={OpenNav}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <Outlet/>
    </div>
  );
}

export default MobileHead
