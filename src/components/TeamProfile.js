import React from 'react'

const TeamProfile = (item) => {
    return (
        <>
            <div className=''>
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
               
            </div>
        </>
    )
};

export default TeamProfile;
