import styled from 'styled-components';

const widths = {
  wide: '100%',
  normal: '50%',
  narrow: '30%',
};

export const StyledDiv = styled.section`
  width: ${props => widths[props.width]};
  padding: 15px 35px;
  box-sizing: border-box;
  background-color: rgba(240, 245, 237, 1);
  border-radius: 10px;
  display: block;

  @media (min-width: 740px) {
    margin-bottom: unset;
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
    align-items: center;
    padding: 25px 70px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  aspect-ratio: 1/1;
  margin-bottom: 14px;

  @media (min-width: 740px) {
    margin-bottom: unset;
  }
`;

export const Text = styled.div``;

export const StyledTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 10px;
`;

export const StyledDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;
