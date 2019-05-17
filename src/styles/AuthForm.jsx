import styled from "styled-components";

const AuthForm = styled.form`
  height: 70vh;
  width: 40vw;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background-color: rgba(255,255,255, 0.9);
  box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);
  label {
    align-self: flex-start;
    margin-left: 12%;
  }
`;

export default AuthForm;
