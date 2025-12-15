import React from "react";

const Formfield = ({
  title,
  type,
  placeholder,
  keyboardType,
  multiple,
  value,
  onChange,
  fieldtype,
  id,
}) => {
  return (
    <div>
      <div className=" items-center justify-center border-white mb-[24px] px-4 rounded-[7px] ">
        <p className="font-interV text-[9px] text-gray-800 ">{title}</p>

        <div className="w-full h-auto  bg-white rounded-[5px] px-[10px] flex items-center">
          {fieldtype == "singleline" ? (
            <input
              id={id}
              name={id}
              title={title}
              className="text-black p-0 m-0  font-interV text-[11px] w-full h-[34px]"
              type={type}
              placeholder={placeholder}
              //   placeholderTextColor="#7b7b8d"

              value={value}
              onChange={onChange}
            />
          ) : (
            <textarea
              name={id}
              id={id}
              title={title}
              className="min-h-[100px] flex-1 text-black py-[7px] font-interV text-[11px] border-0 w-full h-full"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-multiline="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Formfield;
