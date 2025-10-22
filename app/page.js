import Image from "next/image";
import { images } from "../public/constant";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillCloseCircle,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-[url(/assets/images/bg3.png)] overflow-hidden bg-center bg-cover bg-no-repeat m-0 p-0">
      <div
        // class="main"
        className="flex flex-row h-[100vh] w-[100%] justify-center"
      >
        <div
          // class="leftCol"
          className=" pt-[10dvh] pl-[20dvh] pb-[3dvh] flex flex-row items-end h-[100vh] box-border "
        >
          <div className="">
            <div>
              <a href="http://">
                <Image
                  className="h-[12dvh] w-auto"
                  src={images.logoblack}
                  alt="logo"
                />
              </a>
            </div>
            <div
              // class="welcome"
              className="p-0 flex flex-row box-border"
            >
              <div>
                <p className=" text-[15dvh] leading-[15dvh] font-montHair">
                  Welc
                </p>
              </div>
              <div
                // class="anicenter"
                className=" relative w-[10vh] h-[15vh] flex float-left items-end"
              >
                <svg class="artwork" viewBox="0 0 91.12 91.12">
                  <g style={{ isolation: "isolate" }}>
                    <g>
                      <circle
                        class="shadow"
                        cx="47.8"
                        cy="47.61"
                        r="40.74"
                        style={{
                          fill: "#231f20",
                          mixBlendMode: "multiply",
                          opacity: 0.15,
                        }}
                      />
                      <circle
                        class="face"
                        cx="43.17"
                        cy="42.5"
                        r="40.6"
                        transform="translate(-16.19 30.41) rotate(-33.03)"
                        style={{ fill: "#f1c43b" }}
                      />
                      <path
                        class="faceoverlay"
                        d="M83.32,36.46A40,40,0,0,1,3.58,33.54,40,40,0,0,0,2.6,41a40.6,40.6,0,1,0,80.72-4.55Z"
                        style={{
                          fill: "#f1c43b",

                          mixBlendMode: "multiply",
                          opacity: 0.5,
                        }}
                      />
                      <path
                        class="mouthopenblack"
                        d="M55.21,53.82c4.47-5.17,4.07-12.63,4.07-12.63H56.12c-1.23,1.59-4.58,2.94-12.95,2.94s-11.73-1.35-13-2.94H27.07s-.4,7.45,4.06,12.63c2.75-1.65,7.11-2.73,12-2.73S52.46,52.17,55.21,53.82Z"
                        style={{ fill: "#383938" }}
                      />
                      <path
                        class="teeth"
                        d="M43.17,44.13c8.37,0,11.72-1.35,12.95-2.94H30.21C31.44,42.78,34.79,44.13,43.17,44.13Z"
                        style={{ fill: "#fff" }}
                      />
                      <path
                        class="tongue"
                        d="M43.17,58.68c5.92,0,9.67-2.11,12-4.86-2.75-1.65-7.11-2.73-12-2.73s-9.29,1.08-12,2.73C33.51,56.57,37.26,58.68,43.17,58.68Z"
                        style={{ fill: "#e8494a" }}
                      />

                      <line
                        class="eyesclosedR"
                        x1="54.01"
                        y1="30.9"
                        x2="63.61"
                        y2="30.9"
                        style={{
                          fill: "none",
                          stroke: "#383938",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                        }}
                      />
                      <path
                        class="irisR"
                        d="M52.14,29.43c0-3.8,2.08-6.87,4.65-6.87s4.65,3.07,4.65,6.87-2.08,6.87-4.65,6.87S52.14,33.22,52.14,29.43Z"
                        style={{ fill: "#383938" }}
                      />
                      <path
                        class="pupilR"
                        d="M54,26.4a2.79,2.79,0,1,1,2.79,2.78A2.79,2.79,0,0,1,54,26.4Z"
                        style={{ fill: "#fff" }}
                      />
                      <line
                        class="eyesclosedL"
                        x1="24.62"
                        y1="30.9"
                        x2="34.23"
                        y2="30.9"
                        style={{
                          fill: "none",
                          stroke: "#383938",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                        }}
                      />
                      <path
                        class="irisL"
                        d="M34,29.43c0-3.8-2.09-6.87-4.66-6.87s-4.65,3.07-4.65,6.87,2.08,6.87,4.65,6.87S34,33.22,34,29.43Z"
                        style={{ fill: "#383938" }}
                      />
                      <path
                        class="pupilL"
                        d="M26.57,26.4a2.78,2.78,0,1,1,2.78,2.78A2.78,2.78,0,0,1,26.57,26.4Z"
                        style={{ fill: "#fff" }}
                      />
                      <path
                        class="smilecurve"
                        d="M25.71,48.07s4.78,9,17.14,9.41,17.78-8.14,17.78-8.14"
                        style={{
                          fill: "none",
                          stroke: "#383938",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <p className=" text-[15dvh] leading-[15dvh] font-montHair">
                  me
                </p>
              </div>
            </div>
            <div
              // class="aboutMe"
              className="w-[90dvh]"
            >
              <h1>
                Where Creativity Meets Code: Graphic Design & Front-End
                Development
              </h1>
              <p className="">
                Crafting stunning and user-friendly websites using technologies
                like HTML, CSS, React, React Native, Next.JS, Node.Js, Tailwind
                CSS, JavaScript Adobe Illustrator, Adobe InDesign, Adobe
                Livecycle, Adobe Acrobat, e.t.c. <br />
                <br />
                My goal is to provide seamless, integrated solutions that not
                only meet my clients needs but also drive engagement and achieve
                their business objectives.
                <span className="">
                  <Link className="text-blue-800" href="">
                    read more...
                  </Link>
                </span>
              </p>
            </div>
            <div className="flex flex-row ">
              <button className="text-[#866ae3] w-[120px] mr-4 h-[35px] rounded-[4px] my-[20px] font-bold bg-white bg-opacity-20 mx-0 border-[#4c4c4c37] hover:bg-[#5534bf] hover:text-white">
                <Link href="/Projects">Projects</Link>
              </button>
              <button className="text-[#866ae3] w-[120px] h-[35px] rounded-[4px] my-[20px] font-bold bg-white bg-opacity-20 mx-0 border-[#4c4c4c37] hover:bg-[#5534bf] hover:text-white">
                <Link href="/ContactUs">Contact Us</Link>
              </button>
            </div>
            <div className="w-[130px] flex h-[30px] my-[30px] items-center box-border justify-between">
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

        <div className="w-[110vh] relative  flex flex-col -mr-[12dvh] ">
          {/* <div className=" ">
            <Image
              alt="Projects"
              className="object-cover top-0 left-0 h-[100%]"
              src={images.Projects}
            />
          </div> */}
          <div className=" -mt-[70px] -ml-10 overflow-clip -rotate-28 w-[990px] absolute flex ">
            <div class="projectSlide" className="flex">
              <div className=" mt-[390px] h-[370px] w-[225px] ">
                <Image alt="getlinkedweb" src={images.GetlinkedWeb} />
              </div>
            </div>
            <div class="projectSlide2" className=" mx-[12px]">
              <div className="h-[585px] mt-3 mb-[12px] w-[225px]">
                <Image alt="takapuna" src={images.Takapuna} />
              </div>
              <div className="h-[230px]  overflow-clip w-[225px]">
                <Image alt="samman" src={images.Samaan} />
              </div>
            </div>
            <div class="projectSlide3" className="">
              <div className="h-[165px] w-[225px]  overflow-clip">
                <Image alt="ecommerce" src={images.ecoommerce} />
              </div>
              <div className="h-[580px] my-[12px] overflow-clip w-[225px]">
                <Image alt="getlinkedm" src={images.Getlinkedm} />
              </div>
              <div className="h-[170px] w-[225px]">
                <Image alt="Takapuna" src={images.Takapuna} />
              </div>
            </div>
            <div class="projectSlide4" className="mx-[12px]">
              <div className="h-[500px] w-[225px] mt-17 mb-[12px] overflow-clip">
                <Image alt="Samaan" className=" " src={images.Samaan} />
              </div>
              <div className="h-[100px] w-[225px] bg-blue-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
