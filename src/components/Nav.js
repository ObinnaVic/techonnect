import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Logo from "../images/MainLogo.png";

function Nav() {
  return (
    <main>
      <div className="nav fixed bg-black flex justify-between items-center w-full px-16">
        <img src={Logo} alt="logo" className="w-40" />
        <div className="flex items-center">
          <ul className="flex text-white mr-8">
            <NavLink to="/">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                HOME
              </li>
            </NavLink>
            <NavLink to="Service">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR SERVICES
              </li>
            </NavLink>
            <NavLink to="Team">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR TEAM
              </li>
            </NavLink>
            <NavLink to="Blog">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                BLOG
              </li>
            </NavLink>
            <NavLink to="Contact">
              <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                CONTACT US
              </li>
            </NavLink>
          </ul>
          <button className="bg-red-700 rounded-md text-white p-3">
            BOOK NOW
          </button>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default Nav
