import React from 'react'

function Footer() {
  return (
    <>
    <div  className=' flex justify-center pl-14 pt-16'>
       <div className="flex pt-2 flex-row gap-3">
             
              <div>
                <a
                  href="https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" cursor-pointer size-7 hover:scale-110"
                    src="/ig.svg"
                    alt="instagram"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/arunmeena_17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" cursor-pointer size-7 hover:scale-110"
                    src="/tg.svg"
                    alt="telegram"
                  />
                </a>
              </div>
              <div>
                <img
                  className=" cursor-pointer size-7 hover:scale-110 "
                  src="/wp.svg"
                  alt="whatsapp"
                />
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/arunmeena0312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" cursor-pointer size-7 hover:scale-110"
                    src="/lkdn.svg"
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>

          </div>

            <div className=' pl-[678px] size-1 pt-2 '>
               <span> _________________________________</span>
             
            </div>
              <div className='pt-7 text-center whitespace-nowrap flex justify-center pl-[55px] pb-10'>
                <span className='flex text-sm'>  © 2025 All Right Reserved <br />Arun Meena</span>
                
            </div>
               
            

           
            
            </>
    
  )
}

export default Footer
