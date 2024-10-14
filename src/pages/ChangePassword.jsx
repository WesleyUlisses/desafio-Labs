import React from 'react'
import '../styles/changePassword.css'
import Menu from '../components/menuLateral/Menu'
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {

    const redirectClick = useNavigate();
    
    const handleClick = () => {
       redirectClick('/')
   }


    return (
        <div>
            <Menu />
            <div className="passwordContainer">
                <div className="legendLogin">
                    <h3>Esqueceu a senha?</h3>
                    <p>Por favor, insira o endereço de e-mail associado à sua conta e enviaremos um e-mail com um link para redefinir sua senha.</p>
                </div>



                <div className="emailContainer">
                    
                    <input type="email" placeholder='    Email*' id='userInput' />
                </div>

            <div className="btnContainer">

                <button>
                    Esqueci a senha
                </button>

                <button className='btn2'onClick={handleClick}>
                    Retornar ao Login
                </button>
            </div>

            </div>
        </div>

    )
}

export default ChangePassword