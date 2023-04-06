import React, { useContext } from "react";
import Sun from "../assets/light.svg";
import DarkSun from "../assets/blackDark.svg";
import Bolt from "../assets/bolt.svg";
import DarkBolt from "../assets/darkBolt.svg";
import DarkCaution from "../assets/darkCaution.svg";
import Caution from "../assets/caution.svg";
import { capabiliites } from "../assets/HomeArrays";
import { examples } from "../assets/HomeArrays";
import { limitations } from "../assets/HomeArrays";
import { FormContext } from "../Contexts/FormContext";
function Home(props) {
  const { command, setInput } = useContext(FormContext);
  const handle = (cap) => {
    setInput(cap);
  };
  return (
    <>
      <div className="flex  flex-col lg:justify-center justify-start w-full overflow-y-scroll  h-full pb-36">
        <div className=" p-10  w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl  font-bold">ChatGPT</h1>
        </div>
        <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-6 lg:space-y-0 space-y-3 w-fit  justify-items-center  mx-auto px-2">
          <div className="space-y-3 flex  flex-col items-center">
            <div className="lg:space-y-4 flex lg:flex-col items-center">
              <picture className="lg:w-7 w-5">
                <img
                  className="w-full"
                  src={!command[2] ? Sun : DarkSun}
                  alt="sun"
                ></img>
              </picture>
              <p className="text-xl px-2 ">Examples</p>
            </div>
            {examples.map((example, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    handle(example);
                  }}
                  className={` ${
                    command[2]
                      ? "bg-gray-300/50  border-gray-300 hover:bg-gray-400/50"
                      : "bg-gray-600/50 border-gray-800/25 hover:bg-gray-700/75"
                  } lg:w-[15rem] w-full border-2 transition-all  lg:h-[5rem] rounded-md p-3  text-center flex items-center`}
                >
                  <p className="w-full">
                    {example} {`➝`}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="space-y-3 flex  flex-col items-center">
            <div className="lg:space-y-4 flex lg:flex-col items-center">
              <picture className="lg:w-7 w-5">
                <img
                  className="w-full"
                  src={!command[2] ? Bolt : DarkBolt}
                  alt="sun"
                ></img>
              </picture>
              <p className="text-xl px-2">Capabilities</p>
            </div>
            {capabiliites.map((capability, index) => {
              return (
                <div
                  className={` ${
                    command[2]
                      ? "bg-gray-300/50  border-gray-300"
                      : "bg-gray-600/50 border-gray-700/50"
                  }  lg:w-[15rem] w-full border-2  lg:h-[5rem] rounded-md p-3  text-center flex items-center`}
                >
                  <p className="w-full">{capability}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-3  flex flex-col items-center">
            <div className="lg:space-y-4 flex lg:flex-col items-center">
              <picture className="lg:w-7  w-5">
                <img
                  className="w-full "
                  src={!command[2] ? Caution : DarkCaution}
                  alt="sun"
                ></img>
              </picture>
              <p className="text-xl px-2">Limitations</p>
            </div>

            {limitations.map((limitation, index) => {
              return (
                <div
                  className={` ${
                    command[2]
                      ? "bg-gray-300/50  border-gray-300"
                      : "bg-gray-600/50 border-gray-800/25"
                  } lg:w-[15rem] w-full  border-2 lg:h-[5rem] rounded-md p-3  text-center flex items-center`}
                >
                  <p className="w-full">{limitation}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </>
  );
}

export default Home;
