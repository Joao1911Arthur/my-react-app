import { useState } from "react";

import '../App.css'

function VerificarSenha() {

    const [texto, setTexto] = useState("");
    const [senha, setSenha] = useState(""); 



    const pegarSenha = (neh) => {
        setSenha(neh.target.value);

        if (senha.length < 9) {
            setTexto("Sua senha tem menos 10 caracteres");
        }else{
            setTexto("");
        }
    }

    const verificarSenha = () => {
        if (senha.length >= 10) {
            alert("Nice");
        } else {
            alert("Senha fraca, precisa conter no minimo 10 caracteres");
        }
    }

    return (
        <div>

            <h1>Senha</h1>
            <input type="password" placeholder="Digite sua senha" onChange={(x) => { pegarSenha(x) }} />

            <p>{texto}</p>

            <button onClick={() => { verificarSenha() }}>verificar</button>

        </div>
    )
}

export default VerificarSenha;