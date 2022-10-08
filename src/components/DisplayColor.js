import React, {useState, useEffect} from "react";
import { getRandomHex, shuffledArray } from "../utils/HelperMethod";
import styled from "styled-components";

const OuterContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
height:100vh;
width:100vw;
`

const Container = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
margin-top:-50px;
`
const Title = styled.div`
margin-top:30px;
font-weight:bold;
font-size:30px;
`

const Color = styled.div`
height:100px;
width:100px;
background-color:${(props)=>props.color};
`
const Score = styled.div`
margin-bottom:2rem;
font-weight:bold;
font-size:30px;
`
const Button = styled.button`
margin-right:10px;
`

const Buttons = styled.div`
margin-top:1rem;
width:100%;
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
    const [print, setPrint] = useState(null);
    const [score, setScore] = useState(0);

    const clickHandler = (e) =>{
        if(color === e.target.value){
            console.log('Correct!!')
            randomNum = shuffledArray();
            hex = [getRandomHex(), getRandomHex(), getRandomHex()]
            const randomColor = hex[Math.floor(Math.random()*3)]
            setColor(randomColor)
            setPrint('Correct!!')
            setScore(score + 1)
        }else{
            console.log("Incorrect")
            setPrint('Incorrect :(')
        }
    }

    return(
        <OuterContainer>
            <Title>Guess the Color</Title>
            <Container>
                <Score>Score: {score}</Score>
                <Color color={color}/>
                <Buttons>
                    <Button onClick={clickHandler} value={hex[randomNum[0]]}>{hex[randomNum[0]]}</Button>
                    <Button onClick={clickHandler} value={hex[randomNum[1]]}>{hex[randomNum[1]]}</Button>
                    <Button onClick={clickHandler} value={hex[randomNum[2]]}>{hex[randomNum[2]]}</Button>
                </Buttons>
                {print !== null && <div>{print}</div>}
            </Container>
        </OuterContainer>
    )
}

export default DisplayColor