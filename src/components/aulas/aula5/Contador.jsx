import { useState } from 'react'

import './App.css'

function Contador() {

  const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Resetar</button>
    </div>
  )

}

export default Contador
