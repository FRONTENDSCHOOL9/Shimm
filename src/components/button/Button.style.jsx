import styled from 'styled-components';

const colors = {
  primary: 'rgba(85, 162, 90, 1)',
  dark: 'rgba(51, 86, 53, 1)',
  emphasis: 'rgba(238, 176, 86, 1)',
};

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => colors[props.color]};
  border-radius: 20px;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
`;

export { StyledButton };
