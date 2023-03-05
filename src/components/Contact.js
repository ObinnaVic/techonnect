import React from 'react'

function Contact() {
  return (
    <>
      <div>
        <header>
          
        </header>
        <div className='contactmain'>
          <div className='contactbox'>
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
          <div className='flex justify-between item-center p-4 mailphone'>
            <div className='flex flex-col bgcolor'>
              <img className='w-6 h-7 pb-3' src='./images/Email.png' alt='email' />
              <h2>
                  E-mail
              </h2>
              <h5>
                Techonnect@gmail.com
              </h5>
            </div>
            <div className='flex flex-col bgcolor'>
              <img className='w-4 h-9 pb-3' src='./images/Phone.png' alt='Phone' />
               <h2>
                  Phone number
              </h2>
              <h5>
                234-0000-0000-0000 <br/>
                234-0000-0000-0000
              </h5>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;
