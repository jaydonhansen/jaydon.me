import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "./hooks/useDarkMode";

function App() {
  const { changeTheme } = useTheme();
  const numel = "/img/numel.gif";
  return (
    <div className="App">
      <div className="flex h-screen bg-slate-200 dark:bg-slate-900">
        <div className="fixed top-2 right-2">
          <button
            onClick={() => changeTheme()}
            type="button"
            className=" rounded-full p-2"
          >
            <MoonIcon className="h-5 w-5 text-slate-900 dark:text-slate-200" />
          </button>
        </div>

        <div className="grid m-auto screen">
          <div className="grid place-concent-center max-w-xl">
            <img src={numel} className="p-32" alt="hello there" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
