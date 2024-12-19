import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    setCount((count) => count + 1);

    const version = await window.ipcRenderer.invoke("getAppVersion");
    console.log("App Version:", version);
  };

  useEffect(() => {
    window.ipcRenderer.send("rendererProcessMessage", `Count: ${count}`);
  }, [count]);

  return (
    <>
      <div>
        <a
          href="https://electron-vite.github.io"
          target="_blank"
          rel="noreferrer"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
