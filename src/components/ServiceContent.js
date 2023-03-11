import React from 'react'
import Data2 from '../Datas/ServiceData';

const ServiceContent = () => {
  return (
    <>
        <div className='service'>
          <div className='main serviceimg'>

          </div>
            <div className='writeup'>
              <h2>Dive into the details!</h2>
            </div>
        </div>
        <section className='servicemain'>
          {Data2.map((props) => {
            return (
              <div className='servicebox'>
                  <div className='text-2xl mb-5'>
                      {props.title}
                  </div>  
                  <div className='text-xs mt-12'>
                      {props.content}
                  </div>  
              </div>
            )
          })}
        </section>
            
          
      </>
  )
};

export default ServiceContent;
