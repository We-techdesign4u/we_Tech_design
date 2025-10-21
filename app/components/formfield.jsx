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
}) => {
  return (
    <div>
      {fieldtype == "singleline" ? (
        <div className=" items-center justify-center h-[48px] border-white my-[9px] py-1 px-4 bg-[#F4F5F9] rounded-[7px] ">
          <p className="font-montMed text-[9px] text-[#939498]">{title}</p>

          <div className="w-full h-[25px] flex items-center">
            <input
              title={title}
              className="text-black p-0 m-0  font-montMed text-[11px] w-full h-full"
              type={type}
              placeholder={placeholder}
              //   placeholderTextColor="#7b7b8d"

              keyboardType={keyboardType}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      ) : (
        <div className=" my-[9px] py-1 px-4 bg-[#F4F5F9] rounded-[7px] flex flex-col">
          <p className="font-montMed text-[9px] text-[#939498]">{title}</p>
          <div className="justify-start w-full h-full items-center pb-1 flex-row">
            <textarea
              title={title}
              className="min-h-[36px] flex-1 text-black p-0 m-0 font-montMed text-[11px] border-0 w-full h-full"
              type={type}
              placeholder={placeholder}
              //   placeholderTextColor="#7b7b8d"
              keyboardType={keyboardType}
              value={value}
              onChange={onChange}
              aria-multiline="true"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Formfield;
