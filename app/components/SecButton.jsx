import React from "react";

const SecButton = ({
  title,
  icon,
  withicon,
  url,
  type,
  disabled,
  col1,
  col2,
}) => {
  return (
    <div className="py-10 flex ">
      <div className="shadow-xl relative cursor-pointer drop-shadow-xl shadow-[#00000074] overflow-clip dark:shadow-[#00000074] flex justify-center items-center h-[45px] border-[0.5px] border-gray-400  rounded-full bg-linear-to-b from-30% via-60% from-[#494949] via-[#393939] to-[#272727] font-interV font-semibold ">
        <div className="absolute flex -z-10 h-14 w-[230px] rounded-[50%]  from-purple-400 via-purple-600 to-purple-900 to-30%  bg-radial-[at_50%_50%] -top-8 blur-[15px]"></div>
        {type == "submit" ? (
          <button
            type={type}
            disabled={disabled}
            className=" flex justify-center items-center  text-white px-8   font-interV font-semibold "
          >
            {title}
            {withicon == "true" ? (
              <span className="ml-2 w-[25px] rounded-full flex  bg-white h-[25px] justify-center bg- items-center text-black">
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
              <span className="ml-2 w-[25px] rounded-full flex  bg-white h-[25px] justify-center bg- items-center text-black">
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

export default SecButton;
