import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <a href="A01028517/Menú.html"><button>Link menu A01028517</button></a>
        <a href="A01028517/Milestone2/Milestone2_Menu.html"><button>Link menu Milestone2</button></a>
        <a href="A01028517/Milestone3/Milestone3_Menu.html"><button>Link menu Milestone3</button></a>

        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href="/A01028418/menu.html">
        <button>A01028418</button>
      </a>
    </>
  );
}

export default App;
