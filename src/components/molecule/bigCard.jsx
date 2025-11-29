import TextField from '@mui/material/TextField';
import SeachButton from '../atom/seachButton.jsx';


function BigCard() {

    const organizado = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

    return (

        <>
            <div style={organizado}>
                <div>
                    <div style={{ width: "480px" }}>
                        <h1 style={{ textAlign: "left" }}>Discolver the Benefits of Natural Supplements</h1>
                    </div>

                    <div style={{width:"330px"}}>
                        <p style={{ textAlign: "left" }} > Find a variety of natural supplements to support your health and weilness</p>
                    </div>

                    <div style={{ textAlign: "left" }}>
                        <TextField id="outlined-basic" label="Pesquisar" variant="outlined" />
                        <SeachButton />
                    </div>
                </div>

                <div>
                    <img src="/src/assets/d9447398-42b9-477a-b17f-169c40bb4805.png" alt="" style={{width:"357px"}} />
                </div>
            </div >


        </>

    )

}

export default BigCard;