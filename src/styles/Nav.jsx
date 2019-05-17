import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  padding-left: 1vw;
  padding-right: 1vw;
  background-color: transparent;
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
  a:first-child {
    font-weight: bold;
  }
`

export default Nav;
