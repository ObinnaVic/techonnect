import React from 'react'
import Data from "../Datas/TeamData"


const TeamProfile = (item) => {
    return (
        <>
         <div>
            <header>

            </header>

            <div className='main'>
                <div className='arrow'>
                    <img src='/images/Arrow.png' alt='arrow' />
                    <div className='text text-white text-4xl absolute top-39% left-29%'>
                    Our Team
                </div>
            </div>
            
            </div>
            <div className='subMain'>
            <div className='writeup'>
                <h2>
                Meet The Team
            </h2>
            <p>
                We have a lot of professionals at Techonnect. Here you can find information about our team members and their various departments.
                </p>
            </div>
            

            </div>

        </div>

        <section className='teamProfile'>
            {Data.map((item) => {
                return (
                        <div className='profile'>
                            <div className='round'>
                                <img src={`/images/${item.img}`} alt="" />
                            </div>
                            <div className='profileText'>
                                <div className='teamName'>
                                    {item.teamName}
                                </div>
                                <div className='path'>
                                    {item.path}
                                </div>                    
                            </div>
                        </div>
                )
            })}
        </section>
               
        </>
    )
};

export default TeamProfile;
