import React from "react";

function Home() {
  return (
    <div id="home" className="flex gap-72 pt-20 pb-72">
      <div className="font-montserrat ">
        <div className=" flex font-bold pt-16 pl-16">Welcome In My Feed</div>
        <div className="pl-16 pt-1 font-bold text-3xl  flex">
          Hello, I'm a <span className="text-green-500"> Developer!</span>
        </div>
        <div className="flex gap-96 ">
          <div className="w-[650px] text-sm pl-16 pt-8 ">
            Hello, I'm Arun, a passionate Web developer with a keen eye for MERN
            Stack. With a background in IT, I strive to create impactful and
            visually stunning software solutions that leave a lasting
            impression.
          </div>
        </div>


        <div className=" flex gap-36 pt-28 ">
          <div className="pt-12 font-bold pl-16 text-xl w-60">
            Available on
            <div className="flex pt-2 flex-row gap-3">
              <div>
                <a
                  href="https://www.linkedin.com/in/arunmeena0312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" cursor-pointer size-8 hover:scale-110"
                    src="/linkedin (1).png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" cursor-pointer size-8 hover:scale-110"
                    src="/instagram.png"
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
                    className=" cursor-pointer size-8 hover:scale-110"
                    src="/telegram.png"
                    alt="telegram"
                  />
                </a>
              </div>
              <div>
                <img
                  className=" cursor-pointer size-8 hover:scale-110"
                  src="/whatsapp.png"
                  alt="whatsapp"
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" font-bold text-xl pt-12 ">
              Currently working on
              <div className="flex pt-2 pl-6 flex-row gap-3">
                <div>
                  <img
                    className=" cursor-pointer size-8"
                    src="/mongodb.png"
                    alt="mongodb"
                  />
                </div>
                <div>
                  <img
                    className=" cursor-pointer size-8"
                    src="/expressjs.svg"
                    alt="express"
                  />
                </div>
                <div>
                  <img
                    className=" cursor-pointer size-8"
                    src="/reactt.png"
                    alt="react"
                  />
                </div>
                <div>
                  <img
                    className=" cursor-pointer size-8"
                    src="/programing.png"
                    alt="nodejs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex size-96 pt-20">
        <img
          className="rounded-full w-[400px] h-[375px]  object-cover"
          src="/home..jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
