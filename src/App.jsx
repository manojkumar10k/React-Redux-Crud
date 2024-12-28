import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Adduser from './Adduser'
import View from './View'
import Edit from './Edit'
import { Delete } from './Reducer'

function App() {

  return (
    <div>
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/add' element={<Adduser/>}></Route>
              <Route path='/View/:someID' element={<View/>}></Route>
              <Route path='/Edit/:someID' element={<Edit/>}></Route>
              <Route path='/Delete/:someID' element={<Delete/>}></Route>
            </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App
