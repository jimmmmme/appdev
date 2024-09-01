import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  const [userName, setUserName] = useState("~Name~");
  const [tempUserName, setTempUserName] = useState("");

  const handleButtonClick = () => {
    setUserName(tempUserName);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Greetings, {userName}!</h1>
      <div className="card">
        <TextField 
          id="standard-basic" 
          label="Enter your name" 
          variant="standard" 
          onChange={(e) => setTempUserName(e.target.value)} 
        />

        <button onClick={handleButtonClick}>
          Update Name
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
