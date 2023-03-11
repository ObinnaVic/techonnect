import React from 'react'
import head from "../images/head.png";

function Home() {
  return (
    <div>
      <div className="hero-section flex flex-col justify-center p-16">
        <div>
          <img src={head} alt="header" className='mb-7' />
          <p className="text-white">Innovations That Stands Out at its Best</p>
        </div>
        <button className="bg-red-700 rounded-md text-white p-3 w-32 absolute bottom-40">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Home
