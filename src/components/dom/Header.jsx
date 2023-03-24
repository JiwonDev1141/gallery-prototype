import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  background-color: white;
`;

const NavBox = styled.div`
  width: 20%;
  height: 50px;
  color: black;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavBtn = styled.button`
  cursor: pointer;
  padding: 0 10px 0 10px;
  height: 80%;
  font-weight: 600;
  width: 40%;
  border: ${(props) => (props.border ? props.border : "solid 2px black")};
  background-color: ${(props) => props.backgroundColor};
`;

const SiteMark = styled.em`
  color: black;
  font-weight: 700;
  font-size: 24px;
  margin-left: 16px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBox>
        <NavBtn backgroundColor="#D9D9D9" border="none">
          <Link
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/login"
          >
            Login
          </Link>
        </NavBtn>
        <NavBtn backgroundColor="white">
          <Link
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/sign-up"
          >
            Sign Up
          </Link>
        </NavBtn>
      </NavBox>
      <Link to="/">
        <SiteMark>Loom</SiteMark>
      </Link>
    </StyledHeader>
  );
};

export default Header;
