import React, { useState } from 'react'
import '../styles/newPassword.css'
import Menu from '../components/menuLateral/Menu'
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {


  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMessage("As senhas não coincidem.");
      return
    }

    try {
      const response = await axios.post('https://labs-talent-desafio.onrender.com/editarusuarios/5', {
        senha,
      });
      setMessage("Senha alterada com sucesso!");
    } catch (error) {
      setMessage("Erro ao trocar senha.");
      console.log(error);
    }
  };


  const redirectClick = useNavigate();

  const handleClick = () => {
    redirectClick('/')
  }


  return (
    <div>

      <Menu />
      <div className="passwordContainer">
        <div className="title-container">
          <h3>Digite a nova senha</h3>
        </div>


        <form onSubmit={handleSubmitPassword}>

          <div className="input-Container">

            <input
              type="password"
              placeholder='    Senha*'
              id='senha'
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />

            <input
              type="password"
              placeholder='    Confirme a senha*'
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
            />

          </div>

        {message && <p> {message} </p>}

        <div className="btnContainer">

          <button type='submit'>
            Redefinir senha
          </button>

          <button className='btn2' onClick={handleClick}>
            Retornar ao Login
          </button>
        </div>
        </form>

      </div>

    </div>
  )
}

export default NewPassword