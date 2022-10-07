import React, {useState} from "react";
import { getRandomHex, shuffledArray } from "../utils/HelperMethod";
import styled from "styled-components";

const Container = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
`

const Color = styled.div`
height:100px;
width:100px;
background-color:${(props)=>props.color};
`
const Buttons = styled.div`
margin-top:1rem;
`


const DisplayColor = () =>{

    let hex = [getRandomHex(), getRandomHex(), getRandomHex()]
    let randomNum = shuffledArray();
    const [color, setColor] = useState(hex[Math.floor(Math.random()*3)]);
    
    const clickHandler = (e) =>{
        if(color === e.target.value){
            console.log('Correct!!')
            hex = [[getRandomHex(), getRandomHex(), getRandomHex()]]
            //console.log(hex)

            setColor(hex[Math.floor(Math.random()*3)])
            randomNum = shuffledArray();
        }else{
            //console.log('Incorrect :(')
        }
        console.log(color)
        console.log(e.target.value)
    }


    return(
        <Container>
            <Color color={color}/>
            {console.log(color)}
            <Buttons>
                <button onClick={clickHandler} value={hex[randomNum[0]]}>{hex[randomNum[0]]}</button>
                <button onClick={clickHandler} value={hex[randomNum[1]]}>{hex[randomNum[1]]}</button>
                <button onClick={clickHandler} value={hex[randomNum[2]]}>{hex[randomNum[2]]}</button>
            </Buttons>
        </Container>
    )
}

export default DisplayColor