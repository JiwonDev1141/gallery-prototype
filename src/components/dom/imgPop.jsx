import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 500px;
    position: absolute;
    background-color: black;
    color: white;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    
`
const Img = styled.img`
    width: 90%;
    height: 80%;
`

const CloseBtn = styled.span`
    cursor: pointer;
`

const ImgPop = ({ showPop, setShowPop }) => {

    // const [show, setShow] = useState(false);
    const imgPopRef = useRef();



    useEffect(() => {
        
        console.log(imgPopRef)

        imgPopRef.current.style.display = "flex";

    }, [showPop])

    const closePop = () => {
        imgPopRef.current.style.display = "none";
    }

    return (
        <Container ref={imgPopRef}>
            <CloseBtn onClick={closePop}>X</CloseBtn>
            <Img src="/rockwon.png" />
        </Container>
    )
}

export default ImgPop;