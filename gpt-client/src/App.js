import React, { useEffect, useState } from "react";
import Aside from "./components/Aside";
import Dialogue from "./components/Dialogue";
import PromptForm from "./components/PromptForm";
import { FormContext } from "./Contexts/FormContext";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";

function App(props) {
  const [home, setHome] = useState(true);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("gpt-3.5-turbo");
  const [sideMenu, setSideMenu] = useState(false);
  const [command, setCommand] = useState([false, false, false, false, false]);

  useEffect(() => {
    getEngines();

    //setHome(home);
  }, []);

  async function handleSubmit(e) {
    setHome(false);
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me:", message: `${input}` }];
    //console.log("CLN", chatLogNew);
    await setInput("");
    await setChatLog([...chatLogNew, { user: "gpt:", message: undefined }]);
    //console.log("CL", chatLog);
    // fetch response to the api combining the chatlog array and sending it as a message to localhost:3000 as a post
    const messages = chatLogNew
      .map((message) => [message.user, message.message])
      .join("\n");
    console.log("messages", messages);
    // const user = chatLogNew.map((message) => message.user);
    //console.log("U", user);
    //
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel: currentModel,
      }),
    });
    const data = await response.json();
    //console.log("message from data", data.gptResponse);
    setChatLog([
      ...chatLogNew,
      { user: "gpt:", message: `${data.gptResponse}` },
    ]);
    //console.log("chatlog", chatLog);
  }
  const handleClearChatlog = () => {
    setHome(true);
    setChatLog([]);
    setSideMenu(!sideMenu);
  };
  // fetch response to the api combining the chatlog array and sending it as a message to localhost:3000 as a post
  async function getEngines() {
    fetch("http://localhost:5000/models").then((res) => {
      res.json().then((data) => {
        console.log("models", data.models);
        setModels(data.models);
      });
    });
  }
  // console.log("models", models);
  const showMenu = () => {
    setSideMenu(!sideMenu);
  };
  const handleCommand = async (i) => {
    //console.log("first", command);
    const newCommand = command.map((command, index) =>
      i === index ? !command : command
    );

    setCommand(newCommand);
    //console.log("newcommand after map", newCommand, command);
    if (newCommand[0] === true) {
      setChatLog([]);
      newCommand[0] = !newCommand;
    } else if (newCommand[2] === true) {
      setSideMenu(!sideMenu);
      return;
    }
    setCommand(newCommand);
  };
  //console.log("2", command);
  return (
    <>
      <FormContext.Provider
        value={{
          handleClearChatlog,
          handleSubmit,
          input,
          setInput,
          chatLog,
          models,
          setCurrentModel,
          setSideMenu,
          sideMenu,
          handleCommand,
          command,
          showMenu,
        }}
      >
        <div
          className={`flex w-screen ${
            sideMenu && "overflow-y-clip"
          } relative h-screen `}
        >
          <Aside />

          <section
            className={`relative  justify-start h-screen lg:overflow-y-scroll overflow-y-clip  lg:justify-center items-center flex flex-col ${
              command[2] && "bg-gray-100 context text-black"
            }  w-full`}
          >
            <MobileNav />
            {home ? <Home /> : <Dialogue />}
            <PromptForm />
          </section>
        </div>
      </FormContext.Provider>
    </>
  );
}

export default App;
