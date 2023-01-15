import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import SandboxPage from './Pages/SandboxPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="SandboxPage" element={<SandboxPage />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
