import styled from 'styled-components'

const SubmitButton = styled.button`
  border-radius: 6px;
  background-color: rgb(246, 246, 246);
  border: 1px solid rgb(220, 220, 220);
  cursor: pointer;
  font-weight: bold;
  padding: 12px 48px;
  margin: 12px;
  :hover {
    background-color: rgb(246, 246, 246);
    background:linear-gradient(to bottom, rgb(246, 246, 246) 5%, rgb(255, 255, 255) 100%);
  }
  :active {
	position:relative;
	top:1px;
  }
`

export default SubmitButton
