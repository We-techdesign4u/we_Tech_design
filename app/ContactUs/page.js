import React from "react";
import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiTwotoneHighlight,
  AiFillHome,
  AiOutlineHome,
} from "react-icons/ai";
import Formfield from "../components/formfield";

const ContactUs = () => {
  return (
    <div className="bg-[url(/assets/images/bg3.png)] overflow-hidden bg-center bg-cover bg-no-repeat m-0 p-0">
      <div className="h-[100vh] w-[100%] flex pl-[20dvh] py-[50px] items-center ">
        <div className=" w-[550px] justify-center mr-[130px] block">
          <Link
            href={"/"}
            className="w-10 h-10 flex justify-center absolute top-10 shadow-2xl items-center rounded-full bg-primary"
          >
            <AiFillHome size={20} color="white" />
          </Link>

          <h2 className="font-montMed font-bold py-4 text-[30px]">
            Get In Touch
          </h2>
          <p className="pb-4">
            Interested in discussing how my skills can contribute to your
            projects. Please feel free to reach out if you have any
            opportunities or would like to learn more about my portfolio.
            Available for a brief call at your convenience.
          </p>
          <div className="ContPcontactInfo">
            <div className="ContPAdd flex items-center mb-[20px]">
              <div className="ContPAddIcon h-[25px] w-[25px] rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiOutlineHome />
              </div>
              <div className="m-0 font-montMed text-[15px]">
                <h3 className="font-bold m-0 font-montMed text-[15px] ">
                  Address
                </h3>
                <p className="m-0 font-montMed text-[15px] ">
                  Ogun, Nigeria &#40;Available remotely&#41;
                </p>
              </div>
            </div>
            <div className="ContPAdd flex items-center mb-[20px]">
              <div className="ContPAddIcon h-[25px] w-[25px] rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiOutlinePhone />
              </div>
              <div className="ContPAddText m-0 font-montMed text-[11px] ">
                <h3 className="font-bold m-0 font-montMed text-[15px]">
                  Phone Number
                </h3>
                <p className="m-0 font-montMed text-[15px]">
                  +234 70 669 52 339
                </p>
              </div>
            </div>
            <div className="ContPAdd flex items-center mb-[20px]">
              <div className="ContPAddIcon h-[25px] w-[25px] rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiOutlineMail />
              </div>
              <div className="ContPAddText">
                <h3 className="font-bold m-0 font-montMed text-[15px]">
                  E-Mail
                </h3>
                <p className="m-0 font-montMed text-[15px]">
                  We-Design4u11@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-[30px]">
            <p>Follow Us:</p>
            <div className="w-[130px] flex h-[30px] mb-[30px] items-center box-border justify-between">
              <a href="https://github.com/We-techdesign4u">
                <svg
                  className=" hover:fill-[#5534bf] fill-[#866ae3] "
                  height="17"
                  viewBox="0 0 16 16"
                  width="17"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/olowookere-ganiyu-oladapo-9396b193/">
                <svg
                  className=" hover:fill-[#5534bf] fill-[#866ae3] "
                  height="17"
                  width="17"
                  viewBox="0 0 34.61 34.81"
                >
                  <path d="M32,0a2.56,2.56,0,0,1,1.84.74,2.39,2.39,0,0,1,.75,1.77V32.34a2.31,2.31,0,0,1-.75,1.75,2.54,2.54,0,0,1-1.8.72H2.55a2.5,2.5,0,0,1-1.79-.72A2.29,2.29,0,0,1,0,32.34V2.51A2.36,2.36,0,0,1,.76.74,2.52,2.52,0,0,1,2.59,0H32ZM10,10.52a2.59,2.59,0,0,0,.79-1.95A2.62,2.62,0,0,0,10,6.62a3,3,0,0,0-2.11-.77,3,3,0,0,0-2.13.77,2.57,2.57,0,0,0-.82,2,2.59,2.59,0,0,0,.8,1.95,2.83,2.83,0,0,0,2.07.78h0A3,3,0,0,0,10,10.52Zm.47,2.93H5.29V29.16H10.5Zm18.82,6.68a7.62,7.62,0,0,0-1.71-5.33,5.58,5.58,0,0,0-4.3-1.71,5.56,5.56,0,0,0-3.14.87,6.2,6.2,0,0,0-1.55,1.71V13.45H13.41c0,.61,0,3.4,0,8.39v7.32h5.21V20.37a3.77,3.77,0,0,1,.16-1.27,3.25,3.25,0,0,1,.95-1.32,2.68,2.68,0,0,1,1.75-.59,2.3,2.3,0,0,1,2,1,4.62,4.62,0,0,1,.6,2.55v8.43h5.21Z" />
                </svg>
              </a>
              <a href="https://twitter.com/Mr_deepee">
                <svg
                  className=" hover:fill-[#5534bf] fill-[#866ae3] "
                  height="17"
                  width="17"
                  viewBox="0 0 34.85 28.29"
                >
                  <path d="M31.27,7.08V8A20.83,20.83,0,0,1,30,15.16a21.38,21.38,0,0,1-3.9,6.52,19.46,19.46,0,0,1-6.37,4.78A20.76,20.76,0,0,1,11,28.29a20.26,20.26,0,0,1-5.81-.84A19.61,19.61,0,0,1,0,25.1a16.06,16.06,0,0,0,1.71.08,14.19,14.19,0,0,0,4.73-.79,14.76,14.76,0,0,0,4.14-2.23,7.16,7.16,0,0,1-4.14-1.45,6.9,6.9,0,0,1-2.5-3.52,7,7,0,0,0,1.31.12,7.32,7.32,0,0,0,1.87-.24,6.93,6.93,0,0,1-2.9-1.34,7,7,0,0,1-2-2.5,7.56,7.56,0,0,1-.78-3.16V10a6.81,6.81,0,0,0,3.26.91A7.17,7.17,0,0,1,2.33,8.29a7,7,0,0,1-.86-3.4,7.09,7.09,0,0,1,1-3.58A20.33,20.33,0,0,0,8.91,6.56a20.13,20.13,0,0,0,8.24,2.23A8,8,0,0,1,17,7.16a7,7,0,0,1,1-3.58A7.26,7.26,0,0,1,20.55,1,7.06,7.06,0,0,1,27,.6a6.87,6.87,0,0,1,2.35,1.67A14,14,0,0,0,33.86.52,7,7,0,0,1,32.64,2.8a7.47,7.47,0,0,1-1.93,1.7,14.46,14.46,0,0,0,4.14-1.16A15,15,0,0,1,31.27,7.08Z" />
                </svg>
              </a>
              <Link href="">
                <svg
                  className=" hover:fill-[#5534bf] fill-[#866ae3] "
                  height="17"
                  width="17"
                  viewBox="0 0 39.78 27.25"
                >
                  <path d="M39.78,8V21A6.94,6.94,0,0,1,39,24.15,5.79,5.79,0,0,1,36.8,26.4a6.15,6.15,0,0,1-3.14.81q-13.29.08-27.45,0A6.33,6.33,0,0,1,3,26.4,5.89,5.89,0,0,1,.8,24.17,6.31,6.31,0,0,1,0,21V8l5.09,2.18,6.13,2.71q3.66,1.59,6.18,2.65a6.32,6.32,0,0,0,5.16-.1L39,8.27ZM19.85,0H36.32a3.47,3.47,0,0,1,2.57.9,3.41,3.41,0,0,1,.89,2.52,1,1,0,0,1-.16.62,1.26,1.26,0,0,1-.51.38L21.64,12a4.27,4.27,0,0,1-3.66,0Q7.08,7.2.64,4.34A1,1,0,0,1,.24,4,1,1,0,0,1,0,3.46,3.23,3.23,0,0,1,.86.92,3.35,3.35,0,0,1,3.38,0Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[440px] flex items-center">
          <form className=" p-[20px] bg-white rounded-[20px] shadow-2xl">
            <p>Send a Message</p>
            <Formfield
              type="text"
              placeholder="Name"
              title="Company Name"
              fieldtype="singleline"
            />
            <Formfield
              type="text"
              placeholder="Email Address"
              title="Email Address"
              fieldtype="singleline"
            />
            <Formfield
              type="text"
              placeholder="Message"
              title="Message"
              multiple={true}
              fieldtype="multiline"
            />

            <p className="py-4 font-montMed text-[12px]">
              By clicking on submit, you aggree to send a message to the owner
              of this website and will respond via your email as listed above
            </p>

            <button className="emailSubButton flex items-center justify-center w-[85px] h-[40px] bg-primary text-[16px] font-montMed rounded-[50px] cursor-pointer text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
