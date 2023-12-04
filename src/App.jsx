import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PublicAcc from './components/publicAcc'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
    return (
      <BrowserRouter>
    <div>
    <Navbar/>
    <Herosec/>
    {/* <PublicAcc/> */}
    {/* <Footer/> */}
    </div>

    <Routes>
        <Route path='/Login' element = {<Login/>}></Route>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App
=======
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PublicAcc from './components/publicAcc'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
    return (
      <BrowserRouter>
    <div>
    <Navbar/>
    <Herosec/>
    {/* <PublicAcc/> */}
    {/* <Footer/> */}
    </div>

    <Routes>
        <Route path='/Login' element = {<Login/>}></Route>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App

