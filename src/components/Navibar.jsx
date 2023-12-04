import React from 'react'
import Login from '../pages/Login';


function Navibar() {
    

        return (
    <div className= "navi">
        <div class="container-fluid">

            <div className='Logos'> 
                <img src="1-logo.png" alt="" />
                <img src="2-logo.png" alt="" />
                <img src="3-logo.png" alt="" />
            </div>

            <div class="page-title">
                <p class="lead">
                    Government of Andhra Pradesh
                </p>
            
                <h2>Ground Water & Water Audit Department</h2>
                
                <p class="lead">
                Water Resource Department
                </p>
            </div>

            <div className='Logos-f'> 
                <img src="4-logo.png" alt="" />
            </div>

            <div className='logind'>
                <div>
                    <a href="/Login" >Login Here</a>
                </div>
            </div>
        </div>
       
       <div className='links-da'>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#contact">AWARDS</a></li>
                <li><a href="#about">APWRIMS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#about">ABOUT US</a></li>
            </ul>
        </div>

    </div>
  )
  
}

export default Navibar
