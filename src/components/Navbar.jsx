import React, { useState } from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
    const [click,setClick] =useState(false)
    const handleClick=()=> setClick(!click)

    const [color,setColor]=useState(false)

    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
  return (
    <div>
      
    </div>
  )
}

export default Navbar
