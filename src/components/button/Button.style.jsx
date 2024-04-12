import styled from 'styled-components';

const bgColors = {
  primary: 'rgba(85, 162, 90, 1)',
  light: 'rgba(107, 177, 112, 1)',
  dark: 'rgba(51, 86, 53, 1)',
  secondary: 'rgba(238, 176, 86, 1)',
};

const hoverColors = {
  primary: 'rgba(51, 86, 53, 1)',
  dark: 'rgba(85, 162, 90, 1)',
};

const shadowColors = {
  primary: 'rgba(51, 86, 53, 1)',
  secondary: 'rgba(85, 162, 90, 1)',
};

const displays = {
  block: 'block',
};

const size = {
  full: {
    width: '100%',
    height: '50px',
  },
};

const CommonButton = styled.button`
  width: ${props => size[props.size.width]};
  height: ${props => size[props.size.height]};
  background-color: ${props => bgColors[props.bgColor]};
  display: ${props => displays[props.display]};
  border-radius: 25px;
  text-align: center;
  color: ${props => (props.color ? '' : '#fff')};
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:focus {
    box-shadow: inset 0 0 0 2px ${props => shadowColors[props.bgColor]};
  }

  &:hover {
    background-color: ${props => hoverColors[props.color]};
  }
`;

export { CommonButton };
