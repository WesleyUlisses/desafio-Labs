import React from 'react'
import './style.css'
import mulherNaMesa from "./../../assets/mulherNaMesa.svg"
import Logo from "./../../assets/Logo.svg"

const Menu = () => {
  return (

    <div className='painel-container'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      
      <div className="mulher">

        <img src={mulherNaMesa} alt="Mulher na mesa" />
      </div>
    </div>
  )
}

export default Menu