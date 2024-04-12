
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const CircleButton = styled.button`

    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #EEb056;
    position: fixed;
    left: 50%;
    bottom: 8%;
    transform: translate(-50%, 50%);
    color: white;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background:#e69823;
        transition: 0.14s all ease-in;
        transform: translate(-50%,50%) rotate(90deg)
    }

    &::before{
        content: 'wow';
        height: 2px;
        width: 10px;
        color: white;
    }

    &::after{
        content: 'wow';
        height: 2px;
        width: 100px;
    }
`


function FeedCreate(){

    const navigate = useNavigate();
   
    
    
    return(
        <>
        <CircleButton onClick={()=>navigate('/post')}>
        </CircleButton>
        </>
    )
}

export default FeedCreate;