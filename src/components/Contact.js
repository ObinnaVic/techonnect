import React from 'react'

function Contact() {
  return (
    <>
      <div>
        <div className='w-full md:w-3/5 mx-auto mb-10 md:py-40'>
          <div className='contactbox py-20'>
              <h2 className='Pcolor text-center py-2 text-3xl'> Contact Us</h2>
              <form>
                <input type="text" id="fname" name="fname" placeholder='Full Name'/><br></br>
                    <input type="email" id="email" name="email" placeholder='Enter your e-mail'/><br></br>
                    <input type="tel" id="tel" name="tel" placeholder='Phone Number'/><br></br>
                    <input type="text" id="Pname" name="pname" placeholder='Project Name' /><br></br>
                    <textarea placeholder='Project information' name="message" rows="7" cols="20" ></textarea>

                </form>
            <div className='contactBtn'>
              <button>Submit</button>
            </div>
            
          </div>
          <div className='text-center text-3xl'>
            For complaints
          </div>
          <div className='flex w-full flex-col md:flex-row justify-between items-center p-4 mailphone'>
            <div className='w-4/5 md:w-1/3 mb-10 md:mb-0 py-10 text-center bgcolor'>
              <img className='w-6 h-7 mx-auto pb-3' src='./images/Email.png' alt='email' />
              <h2>
                  E-mail
              </h2>
              <h5>
                Techonnect@gmail.com
              </h5>
            </div>
            <div className='w-4/5 md:w-1/3 py-10 bgcolor text-center'>
              <img className='w-4 h-9 pb-3 mx-auto' src='./images/Phone.png' alt='Phone' />
               <h2>
                  Phone number
              </h2>
              <h5>
                234-813-3232-378 <br/>
                234-904-514-4742
              </h5>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;
