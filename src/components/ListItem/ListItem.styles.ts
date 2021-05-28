import styled from 'styled-components'

export const Wrapper = styled.a`
  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  align-items: center;

  border: 1px solid black;
  border-radius: 2px;

  margin-bottom: 10px;

  img {
    max-width: 40px;
    max-height: 40px;
    object-fit: cover;
    border-right: 1px solid black;
    
  }

  span {
    padding: 10px;
  }

    text-decoration: none;
    color: black;
    
  

  &:hover{
    color: #0261aa;
    font-weight: 500;
    background-color: #a5a5a5;
  }
  
`