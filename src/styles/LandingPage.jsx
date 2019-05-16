import styled from "styled-components";

const LandingPage = styled.div`
  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');
  background-size: cover;
  width: 100vw;
  height: 95vh;
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
`;

export default LandingPage;
