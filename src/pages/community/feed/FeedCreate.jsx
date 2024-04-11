import { MdAdd } from 'react-icons/md';
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
`

function FeedCreate(){
    return(
        <>
        <CircleButton>
            <MdAdd />
        </CircleButton>
        </>
    )
}

export default FeedCreate;