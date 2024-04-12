import styled from 'styled-components';

const colors = {
  primary: 'rgba(85, 162, 90, 1)',
  dark: 'rgba(51, 86, 53, 1)',
  strong: 'rgba(238, 176, 86, 1)',
};

const hoverColors = {
  primary: 'rgba(51, 86, 53, 1)',
  dark: 'rgba(85, 162, 90, 1)',
};

const shadowColors = {
  primary: 'rgba(51, 86, 53, 1)',
  dark: 'rgba(238, 176, 86, 1)',
  strong: 'rgba(85, 162, 90, 1)',
};

const displays = {
  block: 'block',
};

const CommonButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => colors[props.color]};
  display: ${props => displays[props.display]};
  border-radius: 20px;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:focus {
    box-shadow: inset 0 0 0 2px ${props => shadowColors[props.color]};
  }

  &:hover {
    background-color: ${props => hoverColors[props.color]};
  }
`;

export { CommonButton };
