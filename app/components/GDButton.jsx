import React from "react";

const GDButton = ({ title, icon, withicon, url, type, disabled }) => {
  return (
    <div className="py-10 flex ">
      <div className=" relative rounded-[16px] h-[57px] flex items-end bg-[#7a7a7a]">
        <div className="shadow-xl relative cursor-pointer drop-shadow-2xl shadow-gray-500 overflow-clip dark:shadow-[#191818] flex justify-center items-center h-[55px]  rounded-[16px] bg-linear-to-b from-30% via-60% from-[#494949] via-[#393939] to-[#272727] font-interV font-semibold ">
          <div className="absolute flex -z-10 h-14 w-[230px] rounded-[50%] bg-cyan-400 -top-8 blur-[20px]"></div>
          {type == "submit" ? (
            <button
              type={type}
              disabled={disabled}
              className=" flex justify-center items-center  text-white px-8   font-interV font-semibold "
            >
              {title}
              {withicon == "true" ? (
                <span className="ml-2 w-[30px] rounded-full flex  bg-white h-[30px] justify-center bg- items-center text-black">
                  {icon}
                </span>
              ) : (
                <div></div>
              )}
            </button>
          ) : (
            <a
              href={url}
              type={type}
              disabled={disabled}
              className=" flex justify-center items-center  text-white px-8   font-interV font-semibold "
            >
              {title}
              {withicon == "true" ? (
                <span className="ml-2 w-[30px] rounded-full flex  bg-white h-[30px] justify-center bg- items-center text-black">
                  {icon}
                </span>
              ) : (
                <div></div>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GDButton;
