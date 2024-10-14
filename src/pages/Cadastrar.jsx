import React, { useState } from 'react'
import Menu from '../components/menuLateral/Menu'
import '../styles/cadastrar.css'
import { validEmail, validPassword } from '../service/regex'
import axios from 'axios'

const Cadastrar = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("")

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPassordErr, setInputPasswordErr] = useState(false);

    const validate = () => {
        if (!validEmail.test(email)) {
            setInputEmailErr(true);
        } else {
            setInputEmailErr(false);
        }
        if (!validPassword.test(senha)) {
            setInputPasswordErr(true);
        } else {
            setInputPasswordErr(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://labs-talent-desafio.onrender.com/usuarios', {
                name: nome,
                email: email,
                password: senha,
            });
    
            // Se chegar aqui, a requisição foi bem-sucedida
            alert("Usuário cadastrado com sucesso!");
            setMessage("Usuário cadastrado com sucesso!");
            console.log(response.data);
    
        } catch (error) {
            // Se ocorrer qualquer erro, ele será tratado aqui
            alert("Erro ao cadastrar o usuário");
            setMessage("Erro ao cadastrar.");
            console.log(error);
        }
    };


    return (

        <div>


            <Menu />
            <div className='cadastrarContainer'>

                <div className="legendLogin">
                    <h3>Bem Vindo ao LabsTalents</h3>
                    <p>Já tem uma conta? <a href="/">Logar</a></p>
                </div>



                <form onSubmit={handleSubmit}>
                    <div className="login">
                        <input
                            type="text"
                            placeholder='    Nome*'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder='    Email*'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {inputEmailErr && <p>Digite um email válido!</p>}

                        <input
                            type="password"
                            placeholder='    Senha*'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        {inputPassordErr && <p>Digite uma senha mais segura</p>}
                    </div>


                    <button type="submit">
                        Registrar
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Cadastrar