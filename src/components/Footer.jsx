import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex justify-center pt-16 px-4 md:px-14'>
        <div className="flex pt-2 flex-row gap-3">
          <div>
            <a
              href="https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer w-7 h-7 hover:scale-110"
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
                className="cursor-pointer w-7 h-7 hover:scale-110"
                src="/tg.svg"
                alt="telegram"
              />
            </a>
          </div>
          <div>
            <img
              className="cursor-pointer w-7 h-7 hover:scale-110"
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
                className="cursor-pointer w-7 h-7 hover:scale-110"
                src="/lkdn.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center pt-2'>
        <span className='text-gray-300 text-sm md:text-base'>_______________________________</span>
      </div>

      <div className='pt-7 text-center flex justify-center px-4 md:px-0 pb-10'>
        <span className='flex flex-col text-sm md:text-base'>
          © 2025 All Right Reserved
          <br />
          Arun Meena
        </span>
      </div>
    </>
  )
}

export default Footer
