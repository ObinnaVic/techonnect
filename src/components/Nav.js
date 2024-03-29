import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../images/MainLogo.png";

function Nav() {
  return (
    <main>
      <div className="nav hidden fixed bg-black md:flex justify-between items-center w-full p-2 md:px-16">
        <img src={Logo} alt="logo" className="w-20 md:w-40" />
        <div className="flex items-center">
          <ul className="flex text-white mr-8">
            <NavLink to="/">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                HOME
              </li>
            </NavLink>
            <NavLink to="/service">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR SERVICES
              </li>
            </NavLink>
            <NavLink to="/team">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR TEAM
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                BLOG
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                CONTACT US
              </li>
            </NavLink>
          </ul>
          <NavLink to="/contact">
            <button className="bg-red-700 rounded-md text-white p-4">
              BOOK NOW
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Nav
