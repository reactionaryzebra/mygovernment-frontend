import styled from 'styled-components'

const HomePage = styled.div`
  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');
  width: 100vw;
  height: 95vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow:auto;
  > div:first-child {
    width: 30vw;
    margin-left: 1vw;
    background-color: rgba(255,255,255, 0.9);
    box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);
  }
`

export default HomePage;
