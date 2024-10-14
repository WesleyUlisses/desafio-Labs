import React, { useState } from 'react'
import '../userRegister/styles.css'

import axios from 'axios'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://labs-talent-desafio.onrender.com/login', {
        email,
        password,
      });

      const code = response.data.code;

      localStorage.setItem('code', code);

      console.log("Login bem-sucedido", response.data)
    } catch (error) {
      setError("Falha no login");
    }

  };

  return (
    <div>
      <div className='appContainer'>

        <div className="legendLogin">
          <h3>Bem Vindo ao LabsTalents</h3>
          <p>Novo aqui? <a href="/cadastrar">Crie uma conta</a></p>
        </div>



        <form onSubmit={handleLogin}>
          <div className="login">
            <input type="text"
              placeholder='    Usuário*'
              id='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input type="password"
              placeholder='    Senha*'
              id='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </form>

        {error && <p> {error} </p>}

        <div className="checkpoint">
          <input type="checkbox"
            className='input-checkbox'
            id='checkpoint'
          />

          <p>Lembre deste dispositivo <a href="/esqueceuSenha">Esqueceu a senha?</a></p>
        </div>
        <button type='submit' >
          Logar
        </button>


      </div>
    </div>
  )
}

export default Login