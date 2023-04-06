import React, { useContext } from "react";
import SendSvg from "../assets/send.svg";
import { FormContext } from "../Contexts/FormContext";

function TextInput(props) {
  const { input, setInput, command } = useContext(FormContext);

  return (
    <>
      <div
        className={`flex lg:w-full w-11/12 mx-5 ${
          command[2] && "bg-white"
        }  justify-center items-center text-area rounded-lg lg:p-2 px-1 border-3 border-gray-800/50 shadow-md  `}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex box-border justify-center w-full bg-transparent border-none  outline-none h-auto text-md p-2 p "
        ></input>
        <button
          disabled={input.trim("") === "" ? true : false}
          className={`h-full flex justify-center p-1 ${
            !command[2] ? "hover:bg-gray-900/75" : "hover:bg-gray-300/75"
          } rounded-md`}
        >
          <img className="h-full w-5" src={SendSvg} alt="send icon"></img>
        </button>
      </div>
    </>
  );
}

export default TextInput;
