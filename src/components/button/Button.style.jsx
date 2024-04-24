import styled from 'styled-components';

const bgColors = {
  primary: 'rgba(85, 162, 90, 1)',
  light: 'rgba(107, 177, 112, 1)',
  dark: 'rgba(51, 86, 53, 1)',
  secondary: 'rgba(238, 176, 86, 1)',
  grey: '#858a85',
  black: '#000',
};

const hoverColors = {
  primary: 'rgba(51, 86, 53, 1)',
  dark: 'rgba(85, 162, 90, 1)',
  grey: '#505350',
  black: '#858a85',
};

const shadowColors = {
  primary: 'rgba(51, 86, 53, 1)',
  secondary: 'rgba(85, 162, 90, 1)',
  grey: '#fff',
  black: '#505350',
};

const displays = {
  block: 'block',
  inline: 'inline-block',
};

const size = {
  small: {
    width: '80px',
    height: '30px',
  },
  mediumLow: {
    width: '90px',
    height: '25px',
  },
  medium: {
    width: '100px',
    height: '30px',
  },
  mediumHigh: {
    width: '120px',
    height: '40px',
  },
  full: {
    width: '100%',
    height: '50px',
  },
};

export const CommonButton = styled.button`
  width: ${props => size[props.size]?.width};
  height: ${props => size[props.size]?.height};
  background-color: ${props => bgColors[props.$bg]};
  display: ${props => displays[props.$display]};
  border-radius: 25px;
  text-align: center;
  color: ${props => (props.color ? '' : '#fff')};
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:focus {
    box-shadow: inset 0 0 0 2px ${props => shadowColors[props.$bg]};
  }

  &:hover {
    background-color: ${props => hoverColors[props.$bg]};
  }
`;
