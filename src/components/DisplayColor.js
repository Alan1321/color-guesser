import React, {useState, useEffect} from "react";
import { getRandomHex, shuffledArray } from "../utils/HelperMethod";
import styled from "styled-components";

const OuterContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
`

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

let hex; 
let randomNum;
let toPrint;

const DisplayColor = () =>{

    if(typeof hex === 'undefined'){   
        console.log('hello world', hex)     
        hex = [getRandomHex(), getRandomHex(), getRandomHex()]
        randomNum = shuffledArray();
    }

    const [color, setColor] = useState(hex[Math.floor(Math.random()*3)]);
    const [print, setPrint] = useState(null)

    const clickHandler = (e) =>{
        if(color === e.target.value){
            console.log('Correct!!')
            randomNum = shuffledArray();
            hex = [getRandomHex(), getRandomHex(), getRandomHex()]
            const randomColor = hex[Math.floor(Math.random()*3)]
            setColor(randomColor)
            setPrint('Correct!!')
        }else{
            console.log("Incorrect")
            setPrint('Incorrect :(')
        }
    }

    return(
        <OuterContainer>
            <Container>
                <Color color={color}/>
                <Buttons>
                    <button onClick={clickHandler} value={hex[randomNum[0]]}>{hex[randomNum[0]]}</button>
                    <button onClick={clickHandler} value={hex[randomNum[1]]}>{hex[randomNum[1]]}</button>
                    <button onClick={clickHandler} value={hex[randomNum[2]]}>{hex[randomNum[2]]}</button>
                </Buttons>
                {print !== null && <div>${print}</div>}
            </Container>
        </OuterContainer>
    )
}

export default DisplayColor