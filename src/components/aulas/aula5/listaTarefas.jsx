import { useState } from "react";

import '../App.css'

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");

    const pegarTexto = (neh) => {
        setTexto(neh.target.value);
    }

    const adicionarTarefa = () => {
        setTarefas([...tarefas, texto]);
    }


    return (



        <div>

            <h1>Lista de Tarefas</h1>

            <input type="text" onChange={(x) => { pegarTexto(x) }} />

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>

            <button onClick={() => { adicionarTarefa() }}>Adicionar tarefa</button>

        </div>

    )
}

export default ListaTarefas;