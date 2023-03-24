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

const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: grey;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60%;
`;

const InputTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin-bottom: 10px;
`;

const InputTagText = styled.div`
  width: 100px;
  text-align: center;
  height: 25px;
`;

const InputTagImg = styled.img`
  paddingright: 12px;
  height: 25px;
`;

const LoginInput = styled.input`
  height: 50px;
  border-bottom: solid 2px black;
  background-color: #d9d9d9;
  font-size: 14px;
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
  margin-bottom: 20px;
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
  font-weight: 100;
`;

const LoginNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IdCheckBtn = styled.button`
  background-color: black;
  color: white;
  height: 50px;
  cursor: pointer;
  font-size: 14px;
  displat: flex;
  align-text: center;
  align-items: center;
  justify-content: center;
  font-weight: 100;
`;

const IdInputArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUp = () => {
  return (
    <Container>
      <PageTitle>Sign Up</PageTitle>
      <LoginForm>
        <InputTag>
          <InputTagImg src="/user_logo.png" />
          <InputTagText>ID</InputTagText>
        </InputTag>
        <IdInputArea>
          <LoginInput
            style={{ width: "70%" }}
            placeholder="아이디 입력"
            type="email"
            name="email"
          />
          <IdCheckBtn style={{ width: "28%" }}>아이디 중복확인</IdCheckBtn>
        </IdInputArea>
        <InputTag>
          <InputTagImg src="/key_logo.png" />
          <InputTagText>Password</InputTagText>
        </InputTag>
        <LoginInput
          placeholder="비밀번호 입력"
          type="password"
          name="password"
        />
        <InputTag>
          <InputTagImg src="/images/icon/.png" />
          <InputTagText>PasswordCheck</InputTagText>
        </InputTag>
        <LoginInput
          placeholder="비밀번호 입력 확인"
          type="password"
          name="password2"
        />
        <InputTag>
          <InputTagImg src="/images/icon/star.png" />
          <InputTagText>CreatorName</InputTagText>
        </InputTag>
        <LoginInput
          placeholder="작가 이름 입력 (20자 이내, 영문, 숫자, 한글 사용가능)"
          type="text"
          name="creatorName"
        />
        <IdInputArea>
          <Link to={"/login"}>
            <LoginBtn
              style={{
                width: "100px",
                backgroundColor: "white",
                color: "black",
                border: "solid 1px black",
              }}
              type="submit"
              value="Cancel"
            />
          </Link>
          <LoginBtn style={{ width: "150px" }} type="submit" value="OK" />
        </IdInputArea>
      </LoginForm>
    </Container>
  );
};

export default SignUp;
