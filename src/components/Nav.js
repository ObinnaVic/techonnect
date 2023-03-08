import React from 'react'
import Logo from "../images/MainLogo.png";

function Nav() {
  return (
    <div className="nav fixed bg-black flex justify-between items-center w-full px-16">
        <img src={Logo} alt="logo" className="w-40" />
        <div className="flex items-center">
            <ul className="flex text-white mr-8">
            <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                HOME
            </li>
            <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR SERVICE
            </li>
            <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                OUR TEAM
            </li>
            <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                BLOG
            </li>
            <li className="hover:bg-slate-400 active:text-red-700 font-bold cursor-pointer p-5">
                CONTACT US
            </li>
            </ul>
            <button className='bg-red-700 rounded-md text-white p-3'>BOOK NOW</button>
        </div>
    </div>
  );
}

export default Nav
