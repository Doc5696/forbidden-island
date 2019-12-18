import styled from 'styled-components'

const StyledLogOut = styled.button`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: none;
  padding: 0 10px;
  transition: 0.15s;
  &:hover{
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.25);
  }
`

export default StyledLogOut