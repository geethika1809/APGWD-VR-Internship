import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PublicAcc from './components/PublicAcc'
import Navibar from './components/Navibar'
import Herosec from './components/Herosec'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
    return (
      <BrowserRouter>
    <div>
    <Navibar/>
    <Herosec/>
    <PublicAcc/>
    <Footer/>
    </div>

    <Routes>
        <Route path='/Login' element = {<Login/>}></Route>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App

