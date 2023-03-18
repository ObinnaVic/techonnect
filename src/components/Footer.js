import React from 'react';
import Logo from "../images/MainLogo.png";

function Footer() {
  return (
    <div className="footer md:pb-3 md:px-16">
      <div className="footer-sec-one flex flex-col items-center w-4/5 md:w-1/3 mx-auto">
        <h2>Have Project in Mind</h2>
        <button className="bg-black p-1 md:p-2">Book Now</button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:w-2/3 mx-auto my-9 pl-9 md:pl-0">
        <div className="flex items-center text-white mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-check-circle mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <p>Efficiency, accuracy and trustworthy</p>
        </div>
        <div className="flex items-center text-white mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-life-preserver mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p>Support always available to hear you out</p>
        </div>
        <div className="flex items-center text-white mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-shield-check mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          </svg>
          <p>Safe and Secure deals</p>
        </div>
      </div>
      <img src={Logo} alt="logo" className="hidden md:block w-1/5 mx-auto mb-10" />
      <hr />
      <div className="grid grid-flow-row grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-3 text-white p-8">
        <div>
          <h2 className="md:text-xl text-sm">WHO ARE WE</h2>
          <div className="mt-5">
            <p>About</p>
            <p>Team</p>
            <p>Work with us</p>
          </div>
        </div>
        <div>
          <h2 className="md:text-xl text-sm">TECHONNECT</h2>
          <div className="mt-5">
            <p>Partners</p>
            <p>Marketing</p>
            <p>Services</p>
            <p>Our Clients</p>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <h2 className="md:text-xl text-sm">SUPPORT</h2>
          <div className="mt-5">
            <p>Contact Us</p>
            <p>Email</p>
            <p>Phone Contacts</p>
            <p>Whatsapp</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div>
          <h2 className="md:text-xl text-sm">WE RECOMMEND</h2>
          <div className="mt-5">
            <p>Hosting Solutions</p>
            <p>Design Feedback</p>
            <p>Trade with Partners</p>
            <p>Essence</p>
          </div>
        </div>
      </div>
      <p className='text-xs text-white flex justify-center'>copyright techonnect 2023.</p>
    </div>
  );
}

export default Footer
