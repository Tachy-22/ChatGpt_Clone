import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext";
import { features } from "./features";
import Plus from "../assets/plus.svg";
function Aside(props) {
  const {
    handleClearChatlog,
    handleCommand,
    models,
    setCurrentModel,
    sideMenu,
    setSideMenu,
    command,
  } = useContext(FormContext);

  return (
    <div
      className={`lg:relative   absolute  lg:flex z-10 ${
        sideMenu
          ? "left-0 lg:w-fit w-full absolute"
          : "lg:left-0 -left-full absolute"
      }   h-full backdrop-blur-sm  transition-all duration-1000`}
    >
      <aside
        className={`lg:relative aside  absolute  lg:flex z-10 ${
          sideMenu ? "left-0 absolute" : "lg:left-0 -left-full absolute"
        }   h-full p-2 w-[260px]  transition-all duration-1000`}
      >
        <div
          onClick={() => {
            setSideMenu(!sideMenu);
          }}
          className={`absolute lg:hidden top-0 ${
            sideMenu ? "-right-7 absolute" : "lg:right-0 -left-full absolute"
          }  border-2 border-slate-500 px-2 py-3 rounded-md bg-slate-200/5`}
        >
          x
        </div>
        <div className="relative w-full  h-3/4">
          <div
            onClick={handleClearChatlog}
            className=" flex items-center bg-inherit border rounded-lg w-full p-3 border-gray-500 border-1  transition-all  hover:bg-gray-500/25 "
          >
            <span className="mr-2 w-6 h-full ">
              <img className="w-full" src={Plus} alt="add icon"></img>
            </span>
            <div> New chat</div>
          </div>
          <div className="h-fit-min   w-full">
            <div className="py-2 text-lg">
              <p>Models</p>
            </div>
            <div className="flex flex-col  bg-inherit h-1/2 space-y-2">
              {models.map((model, index) => {
                return (
                  <>
                    <button
                      onClick={() => {
                        setSideMenu(!sideMenu);
                        setCurrentModel(model.id);
                      }}
                      className="flex p-3 bg-inherit border rounded-lg w-full button-3 border-gray-500 border-1  transition-all  hover:bg-gray-500/25 focus:bg-gray-500/25"
                      key={index}
                      value={model.id}
                    >
                      <p>{model.name}</p>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col left-0 bottom-0  w-full h-fit pt-4 border-t-2 border-gray-300/50 bg-inherit">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSideMenu(!sideMenu);
                  handleCommand(index);
                }}
                className="flex px-2 mx-2  py-3   cursor-pointer transition-all rounded-xl hover:bg-gray-600/25"
              >
                <picture className="flex my-auto w-5">
                  <img
                    className="w-full"
                    src={!command[2] ? feature.iconurl : feature.iconurlAlt}
                    alt="iconurl"
                  ></img>
                </picture>

                <p className="mx-3">
                  {!command[2] ? feature.feature : feature.featureAlt}
                </p>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Aside;
