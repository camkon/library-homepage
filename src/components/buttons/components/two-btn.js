import react, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TwoBtn = () => {

  const [click, setClick] = useState(false)

  return  <Default
    action={click} 
    onMouseDown={() => {setClick(true)}}
    onMouseUp={() => {setClick(false)}}
    >LOGIN</Default>
}

export default TwoBtn;

const Default = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #2576ef;
  color: #fff;
  box-shadow: ${props => props.action ? `0px 2px 2px 0 transparent` : `0px 2px 2px 0 #bbb`};
  transform: ${props => props.action ? `translateY(2px)` : `translateY(0px)`};
  transition: transform 0s ease-in-out;
  user-select: none;
`