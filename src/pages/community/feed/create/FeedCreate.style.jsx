import styled from 'styled-components';

export const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e6e6e6;
  position: fixed;
  bottom: 5%;
  right: 50%;
  transform: translate(-50%, 50%);
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: 0.3s ease-in-out;

  @media (min-width: 800px) {
    right: 20%;
  }

  &:hover {
    background: #cbcbcb;
    transition: 0.14s all ease-in;
    transform: translate(-50%, 50%) rotate(90deg);
  }

  &::before {
    content: ' ';
    height: 8px;
    width: 32px;
    background-color: red;
    position: absolute;
    border-radius: 4px;
    opacity: 1;
    background-image: linear-gradient(to top right, #1e00ff, lime);
  }

  &::after {
    content: '';
    height: 8px;
    width: 32px;
    transform: rotate(270deg);
    background-color: black;
    position: absolute;
    right: 14px;
    top: 26px;
    border-radius: 4px;
    background-image: linear-gradient(to bottom right, #1e00ff, lime);
  }
`;
