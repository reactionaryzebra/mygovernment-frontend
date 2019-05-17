import styled from "styled-components";

const LandingPage = styled.div`
  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');
  background-size: cover;
  width: 100vw;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    height: 45vh;
    background-color: rgba(255,255,255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);
  }
`;

export default LandingPage;
