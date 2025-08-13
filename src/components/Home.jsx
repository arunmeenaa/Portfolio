import React from "react";

function Home() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row gap-10 md:gap-72 pt-20 pb-20 md:pb-72 lg:pr-32"
    >
      <div className="font-montserrat flex-1">
        <div className="flex font-bold pt-16 pl-4 md:pl-16">Welcome In My Feed</div>
        <div className="pl-4 md:pl-16 pt-1 font-bold text-3xl flex flex-wrap">
          Hello, I'm a <span className="text-green-500"> Developer!</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[650px] text-sm pl-4 md:pl-16 pt-8">
            Hello, I'm Arun, a passionate Web developer with a keen eye for MERN
            Stack. With a background in IT, I strive to create impactful and
            visually stunning software solutions that leave a lasting
            impression.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-36 pt-12 md:pt-28">
          {/* Available On */}
          <div className="font-bold text-xl pl-4 md:pl-16">
            Available on
            <div className="flex flex-wrap pt-2 gap-3">
              <a
                href="https://www.linkedin.com/in/arunmeena0312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer w-8 h-8 hover:scale-110"
                  src="/linkedin (1).png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer w-8 h-8 hover:scale-110"
                  src="/instagram.png"
                  alt="instagram"
                />
              </a>
              <a
                href="https://t.me/arunmeena_17"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer w-8 h-8 hover:scale-110"
                  src="/telegram.png"
                  alt="telegram"
                />
              </a>
              <img
                className="cursor-pointer w-8 h-8 hover:scale-110"
                src="/whatsapp.png"
                alt="whatsapp"
              />
            </div>
          </div>

          {/* Currently Working On */}
          <div className="font-bold text-xl pl-4 md:pl-6 pt-4 md:pt-12">
            Currently working on
            <div className="flex flex-wrap pt-2 gap-3">
              <img className="cursor-pointer w-8 h-8" src="/mongodb.png" alt="mongodb" />
              <img className="cursor-pointer w-8 h-8" src="/expressjs.svg" alt="express" />
              <img className="cursor-pointer w-8 h-8" src="/reactt.png" alt="react" />
              <img className="cursor-pointer w-8 h-8" src="/programing.png" alt="nodejs" />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center md:justify-end pt-10 md:pt-20">
        <img
          className="rounded-full w-64 h-64 md:w-[400px] md:h-[375px] object-cover"
          src="/home..jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
