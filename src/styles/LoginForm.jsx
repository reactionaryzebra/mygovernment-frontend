import styled from "styled-components";

const LoginForm = styled.form`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  input {
    width: 75%;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    font-family: Raleway;
    font-size: 2rem;
  }
`;

export default LoginForm;
