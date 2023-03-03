import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: black;
    width: 100vw;
    height: 5vh;
    color: white;
    display: flex;
    align-items: center;
`

const NavBox = styled.div`
    background-color: white;
    width: 30%;
    height: 100%;
    color: black;
    position: absolute;
    right: 0;
    display: flex;
    
`

const NavBtn = styled.button`
    cursor: pointer;
    width: 50%;
    height: 100%;
    font-weight: 600;
`

const SiteMark = styled.em`
    color: white;
    font-weight: 700;
    font-size: 24px;
    margin-left: 16px;
`

const Header = () => {

    return (
        <StyledHeader>
            <NavBox>
                <NavBtn>
                    <Link to="/login">Login</Link>

                </NavBtn>
                <NavBtn>
                    <Link to="/sign-up">Sign Up</Link>
                </NavBtn>
            </NavBox>
            <Link to="/"><SiteMark>
                Loom
            </SiteMark></Link>
        </StyledHeader>
    )
}

export default Header;