import React from 'react'
import { assets } from '../../assets/asset'
import { FaShoppingBag,FaEuroSign } from "react-icons/fa";
import { useState, useEffect } from 'react';
import './navbar.css'



const navbar = () => {

    const [active,setactive] = useState(false)
    const [deactive, setDeactive] = useState(false)
    const navbarActive = ()=>{
        if(window.scrollY>100 && window.scrollY <200){
            setDeactive(true)
        }
        if(window.scrollY>=200){
            setactive(true)
            console.log(window.scrollY)
        }else{
            setactive(false) 
            setDeactive(false)    
        }
        
        

        
    }

    window.addEventListener('scroll',navbarActive);





   

  return (
    <div className={`${active ? "navbar active" : "navbar "} && ${deactive ? "navabar deactive":" navbar"}`}>
        <div className="nav_left">
            <ul className='nav_menu'>
                <li style={{border:"2px solid white", padding:"7px 15px", fontWeight:"bolder"}}><a href="#home">IL RESTORENTE</a></li>
                <li><a href="#login-form" style={{border:"2px solid white", borderRadius:"5px", padding:"8px 10px" ,fontWeight:"bolder"}}>ACCEDI</a></li>
            </ul> 
        </div>
        <div className="nav_logo_container">
             <img src={assets.logo} alt="logo" />
        </div>
        <div className="nav_right">
            <ul  className='nav_menu'>
                <li className='cart-btn'>
                    <a href="#cart" style={{border:"2px solid white", borderRadius:"5px", padding:"8px 10px",fontWeight:"bolder"}}>
                        <span>0.00</span>
                        <FaEuroSign/>
                        <FaShoppingBag />
                    </a>
                </li>
                <li className='payment-btn'>
                    <a href="#payment" style={{backgroundColor:"orange", borderRadius:"20px", padding:"10px 15px",fontWeight:"600" }}>PAGAMENTO</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default navbar