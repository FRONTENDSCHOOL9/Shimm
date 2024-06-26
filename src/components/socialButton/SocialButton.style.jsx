import styled from 'styled-components';

const bgColors = {
  white: '#fff',
  yellow: '#fae100',
  green: '#03c75a',
};

const colors = {
  white: '#333',
  yellow: '#3c1e1e',
  green: '#fff',
};

const hoverColors = {
  white: '#e6e6e6',
  yellow: '#c6b300',
  green: '#019d47',
};

const shadowColors = {
  white: '#cccccc',
  yellow: '#c6b300',
  green: '#019d47',
};

const borders = {
  white: '#b4b4b4',
  yellow: 'none',
  green: 'none',
};

export const SocialButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: ${props => bgColors[props.$bg]};
  border-radius: 25px;
  border: 1px solid transparent;
  border-color: ${props => borders[props.$bg]};
  color: ${props => colors[props.$bg]};
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  & img {
    display: none;
    width: 20px;
    height: 20px;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${props => shadowColors[props.$bg]};
  }

  &:hover {
    background-color: ${props => hoverColors[props.$bg]};
  }

  @media (min-width: 740px) {
    max-width: 450px;

    & img {
      display: unset;
    }
  }
`;
