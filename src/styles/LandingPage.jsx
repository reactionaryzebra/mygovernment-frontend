import styled from "styled-components";

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 75%;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    font-family: Raleway;
    font-size: 2rem;
  }
`;

export default LandingPage;
