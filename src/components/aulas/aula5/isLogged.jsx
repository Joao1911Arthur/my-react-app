import { useState } from 'react'


const Aula5 = ({ isLoggedIn, cadeira }) => {
    
    return (
        <div>

            {isLoggedIn ?
                <h1>Welcome Back</h1> :
                <h1>Please Sign Up</h1>}
            <h2>Cadeira: {cadeira}</h2>
        </div>
    )


}

export default Aula5;