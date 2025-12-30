import React from "react";

const SecMenatWork = () => {
  return (
    <div className=" bg-cyan-900 w-full">
      <div className="opacity-80 w-full bg-black h-4">
        <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
      </div>
      <p className=" text-center py-10 text-4xl lg:text-8xl font-montMed text-white font-black ">
        MEN AT <span className="text-amber-500">WORK</span>
      </p>
      <div className="relative">
        <div className="lg:w-[60px] w-[25px] absolute bottom-[30%]  right-[36%]">
          <div className="lg:w-[20px]  w-[8px] lg:pl-[10px] pl-[3px] flex">
            <Image
              alt="steam"
              className="steam lg:h-10 h-5"
              src={images.steam}
            />
            <Image
              alt="steam2"
              className="steam-1 lg:h-10  h-5"
              src={images.steam}
            />
            <Image
              alt="steam3"
              className="steam-2 lg:h-10  h-5"
              src={images.steam}
            />
          </div>
          <Image alt="mug" className="" src={images.mug} />
        </div>
        <div className="bug lg:w-[50px] w-[20px] h-auto absolute justify-items-center bottom-[35%] left-[10%]">
          <Image className="" src={images.bug} />
          <div className="lg:w-[30px] w-[12px] lg:-mt-[5px] -mt-[2px] flex justify-between">
            <Image
              className="legs lg:h-[10px] h-[4px] w-auto"
              src={images.bugleg}
            />
            <Image
              className="legs2 lg:h-[10px] h-[4px] w-auto"
              src={images.bugleg}
            />
            <Image
              className=" lg:h-[10px] h-[4px]  w-auto legs"
              src={images.bugleg2}
            />
          </div>
        </div>
        <div className="deadbug lg:w-[50px] w-[20px] rotate-180 absolute bottom-[15%] justify-items-center left-[30%]   ">
          <Image className="bug-2" src={images.bug} />
          <div className="lg:w-[35px] w-[12px] lg:-mt-[5px] -mt-[2px] flex justify-between">
            <Image
              className="legs lg:h-[10px] h-[4px] w-auto"
              src={images.bugleg}
            />
            <Image
              className="legs2 lg:h-[10px] h-[4px] w-auto"
              src={images.bugleg}
            />
            <Image
              className=" lg:h-[10px] h-[4px]  w-auto legs"
              src={images.bugleg2}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute h-[6px] lg:h-[36px] flex gap-4 lg:gap-12 right-[24%] top-[31%] justify-center items-center ">
            <span className="blink lg:w-[14px] w-[2px] h-[6px] lg:h-[35px]  bg-black flex rounded-[50%]"></span>
            <span className="blink lg:w-[12px] w-[2px] h-[6px] lg:h-[36px] bg-black flex rounded-[50%]"></span>
          </div>
          <Image className="w-full" src={images.animation} />
        </div>
      </div>
      <p className=" text-center py-10 text-2xl lg:text-8xl font-montMed text-white font-black ">
        UNDER <span className="text-amber-500">CONSTRUCTION</span>
      </p>
      <div className="opacity-80 w-full bg-black h-4">
        <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
      </div>
    </div>
  );
};

export default SecMenatWork;
