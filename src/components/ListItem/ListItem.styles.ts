import styled from 'styled-components'

export const Wrapper = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;

  display: flex;
  align-items: center;

  border: 1px solid lightblue;
  border-radius: 2px;

  margin-bottom: 10px;

  img {
    max-width: 40px;
    max-height: 40px;
    object-fit: cover;
    border-right: 2px solid black; 
  }

  span {
    padding: 10px;
  }

    text-decoration: none;
    color: black;
    
  

  &:hover{
    color: ${(props: any) => props.type === 'typescript' ? "white" : "#323330"};
    font-weight: 700;
    background-color: ${(props: any) => props.type === 'typescript' ? "#007ACC" : "#F0DB4F"};
  }
  
`