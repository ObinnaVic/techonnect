import React from 'react'

const ServiceContent = (props) => {
  return (
      <>
          
        <div className='servicebox'>
              <div className='text-2xl mb-5'>
                  {props.title}
              </div>  
              <div className='text-xs mt-12'>
                  {props.content}
              </div>  
          </div>
           
        
    </>
  )
};

export default ServiceContent;
