import styled from 'styled-components'

const Profile = styled.div`
  overflow: auto;
  width: 65vw;
  height: 90vh;
  background-color: rgba(255,255,255, 0.9);
  box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);
  margin-right: 1vw;
  .headshot {
    max-width: 300px;
    max-height: 300px;
  }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header div {
    display: flex;
    flex-direction: column;
  }
`

export default Profile;
