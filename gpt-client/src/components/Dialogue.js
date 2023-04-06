import React, { useContext } from "react";
import PersonSvg from "../assets/Basic_Ui_(186).jpg";
import BotSvg from "../assets/BotSvg.svg";
import { FormContext } from "../Contexts/FormContext";
function Dialogue(props) {
  const { chatLog, command } = useContext(FormContext);

  return (
    <>
      <section className="flex  flex-col justify-start items-center w-full  h-full  overflow-y-scroll lg:pb-0 pb-32">
        <div className="flex overflow-y-scroll flex-col  items-center  w-full h-full min-h-full lg:pb-52">
          {chatLog.map((log, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`w-full   ${
                    log.user === "gpt:"
                      ? "justify-start items-center lg:bg-gray-500/25"
                      : "justify-end"
                  } flex  lg:justify-center  items-center lg:py-8 py-4 px-2`}
                >
                  <div
                    className={`${
                      command[2] ? "text-black lg:text-black" : "text-white"
                    } ${
                      log.user === "gpt:"
                        ? "bg-gray-50/25 rounded-tl-none "
                        : "bg-blue-700   text-white rounded-tr-none  "
                    } lg:flex  lg:w-[775px] max-w-[80%] lg:bg-transparent h-full   px-3 lg:py-3 pb-5 rounded-[1rem] shadow-2xl lg:shadow-none`}
                  >
                    <picture className="mx-5 w-10 h-full ">
                      <img
                        className={`${
                          log.user === "gpt:" ? " bg-green-500/50" : "bg-white "
                        } w-10 rounded-md lg:flex hidden`}
                        src={log.user !== "me:" ? `${BotSvg}` : `${PersonSvg}`}
                        alt="bot icon"
                      />
                    </picture>
                    <div className=" w-fit break-words">
                      {typeof log.message === "undefined" ? (
                        <p>loading...</p>
                      ) : (
                        <p>
                          {log.message
                            .replace("gpt:,", "")
                            .replace("gpt:", "")
                            .replace("GPT:", "")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Dialogue;
