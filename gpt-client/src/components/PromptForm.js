import React from "react";
import TextInput from "./TextInput";
import { FormContext } from "../Contexts/FormContext";
import { useContext } from "react";

function PromptForm() {
  const { handleSubmit, command } = useContext(FormContext);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`absolute bottom-0 space-y-3 h-fit-min  flex flex-col items-center justify-center ${
          command[2]
            ? "bg-gray-100 "
            : "bg-gradient-to-t from-[#343541] via-[#343541] lg:to-transparent to-[#343541]"
        }   py-2  w-full lg:border-none border-t-2 border-gray-300/25 mt-3  `}
      >
        <div className=" flex justify-center items-center  flex-col lg:w-[750px]  w-screen">
          <button className="border hidden w-[10rem] my-4 p-2 rounded-md lg:bg-inherit transition-all hover:bg-gray-300/25 bg-green-700/75">
            Regenerate
          </button>
          <TextInput />
        </div>
        <footer
          className={` ${
            !command[2] ? "text-gray-300/50" : "text-gray-500"
          } text-[0.8rem]  text-center lg:w-full w-screen `}
        >
          ChatGPT Mar 14 Version. Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with. Your feedback will
          help us improve.
        </footer>
      </form>
    </>
  );
}

export default PromptForm;
