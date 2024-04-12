import styled from 'styled-components';

const widths = {
  wide: '100%',
  normal: '50%',
  narrow: '30%',
};

const StyledDiv = styled.section`
  width: ${props => widths[props.width]};
  padding: 15px 35px;
  box-sizing: border-box;
  background-color: rgba(240, 245, 237, 1);
  border-radius: 10px;

  @media (min-width: 740px) {
    padding: 25px 70px;
  }
`;

const StyledTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 40px;
`;

const StyledDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
`;

export { StyledDiv, StyledTitle, StyledDescription };
