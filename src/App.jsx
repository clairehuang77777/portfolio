import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './page/MainPage'
import { ProjectPage } from './page/ProjectPage'
import 'animate.css';
import { AboutPage } from './page/AboutPage.jsx'
import { ContactPage } from './page/ContactPage.jsx'

function App() {
  const basename = import.meta.env.VITE_API_BASE_URL || "/";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/project" element={<ProjectPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
