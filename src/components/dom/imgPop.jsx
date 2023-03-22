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
`;
const Img = styled.img`
  width: 90%;
  height: 80%;
`;

const CloseBtn = styled.span`
  cursor: pointer;
`;

const ImgPop = ({ showPop, setShowPop }) => {
  // const [show, setShow] = useState(false);
  const imgPopRef = useRef();

  useEffect(() => {
    console.log(imgPopRef);

    if (showPop === true) {
      openPop();
    }

    if (showPop === false) {
      closePop();
    }
  }, [showPop]);

  const openPop = () => {
    imgPopRef.current.style.display = "flex";
    setShowPop(true);
  };

  const closePop = () => {
    imgPopRef.current.style.display = "none";
    setShowPop(false);
  };

  return (
    <Container ref={imgPopRef}>
      <CloseBtn onClick={closePop}>X</CloseBtn>
      <Img src="/bird.jpg" />
    </Container>
  );
};

export default ImgPop;
