import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


function Contador() {

    const [count, setCount] = useState(1);

    const somar = () => {
        setCount(count + 1);
    }

    const subtrair = () => {
        setCount(count - 1);
    }

    const estilo = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #000000ff',
        borderRadius: '500px',
        width: '104px',
        Height: "44px"
    }

    return (

        <div style={estilo}>

            <IconButton  style={{marginLeft:"5px"}} onClick={subtrair}>
                <RemoveIcon />
            </IconButton>


            <p>{count}</p>


            <IconButton  style={{marginLeft:"5px"}} onClick={somar}>
                <AddIcon />
            </IconButton>


        </div>

    )

}

export default Contador;