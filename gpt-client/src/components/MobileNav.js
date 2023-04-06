import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext";
import Menu from "../assets/menu.svg";

function MobileNav(props) {
  const { showMenu } = useContext(FormContext);
  return (
    <>
      <nav className="flex lg:hidden h-fit cursor-pointer border-b-2 w-full  py-3 px-2 bg-gray-900/25">
        <div
          onClick={() => {
            showMenu();
          }}
          className="border-2 rounded-md border-slate-500 w-10 "
        >
          <img className="w-full " src={Menu} alt="menu"></img>
        </div>
        <h1 className="w-full flex p-2 text justify-start text-center">ChatGPT</h1>
      </nav>
    </>
  );
}

export default MobileNav;
