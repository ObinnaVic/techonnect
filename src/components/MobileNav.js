import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../images/MainLogo.png";

function MobileNav({ mobileNav, setMobileNav }) {
    const CloseNav = () => [
        setMobileNav(false)
    ]
  return (
    <div>
      <div className="md:hidden">
        <div className={mobileNav ? "mobileNav" : "mobileNav openNav"}>
          <div className="flex justify-between mb-6">
            <span>
              <img src={Logo} alt="logo" className="w-20 md:w-40" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-x-lg text-black"
              viewBox="0 0 16 16"
              onClick={CloseNav}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div>
            <div>
              <div>
                <ul className="flex flex-col items-center">
                  <li className="m-4">HOME</li>
                  <li className="m-4">OUR SERVICES</li>
                  <li className="m-4">OUR TEAM</li>
                  <li className="m-4">BLOG</li>
                  <li className="m-4">CONTACT US</li>
                  <li>
                    <button className="p-2 bg-red-600 rounded-lg m-8">
                      BOOK NOW
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MobileNav;
