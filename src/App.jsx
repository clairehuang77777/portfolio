import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './page/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
