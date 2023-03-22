const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  height: 30%;
`;

const InputTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

const Input = styled.input`
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
`;

const AuthInput = ({ tagImgSrc, tagText, inputType, placeholder }) => {
  return (
    <>
      <InputTag>
        <img src={tagImgSrc} />
        <span>{tagText}</span>
      </InputTag>
      <Input placeholder={placeholder} type={inputType} name={inputType} />
    </>
  );
};

export default AuthInput;
