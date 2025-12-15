import React from "react";

const GDButton = ({ title, icon, withicon, url, type, disabled }) => {
  return (
    <div className="py-10 flex ">
      <div className=" rounded-[16px] h-[57px] flex items-end bg-[#7a7a7a]">
        {type == "submit" ? (
          <button
            type={type}
            disabled={disabled}
            className=" shadow-xl cursor-pointer drop-shadow-2xl shadow-gray-500 flex justify-center items-center h-[55px] text-white px-10  rounded-[16px] bg-linear-to-b from-30% via-60% from-[#494949] via-[#393939] to-[#272727] font-interV font-semibold "
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
            // onClick={(window.location.href = { url })}
            type={type}
            disabled={disabled}
            className=" shadow-xl cursor-pointer drop-shadow-2xl shadow-gray-500 flex justify-center items-center h-[55px] text-white px-10  rounded-[16px] bg-linear-to-b from-30% via-60% from-[#494949] via-[#393939] to-[#272727] font-interV font-semibold "
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
  );
};

export default GDButton;
