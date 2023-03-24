import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border: solid 2px black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainArea = styled.div``;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 30%;
`;

const InputTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  height: 50px;
  border-bottom: solid 2px black;
  background-color: #d9d9d9;
  font-size: 14px;
  margin-bottom: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: black;
    font-weight: 600;
  }
  :-ms-input-placeholder {
    color: black;
    font-weight: 600;
  }
  padding: 10px;
`;

const LoginBtn = styled.input`
  background-color: black;
  color: white;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  displat: flex;
  align-text: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: grey;
`;

const LoginNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Login = () => {
  return (
    <>
      <Container>
        <PageTitle>Log in</PageTitle>
        <LoginForm>
          <InputTag>
            <img src="/user_logo.png" />
            <span>ID</span>
          </InputTag>
          <LoginInput placeholder="아이디 입력" type="email" name="email" />
          <InputTag>
            <img style={{ paddingRight: "12px" }} src="/key_logo.png" />
            <span>PW</span>
          </InputTag>
          <LoginInput
            placeholder="비밀번호 입력"
            type="password"
            name="password"
          />
          <LoginBtn type="submit" value="Log in" />
          <LoginNav>
            <div>
              <span>아이디</span>
              <span> | </span>
              <span>비밀번호 찾기</span>
            </div>
            <Link to="/sign-up">
              <span style={{ fontWeight: 600 }}>회원가입</span>
            </Link>
          </LoginNav>
        </LoginForm>
      </Container>
    </>
  );
};

export default Login;
