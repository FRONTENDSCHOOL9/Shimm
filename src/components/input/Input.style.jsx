import styled from 'styled-components';

const size = {
  small: {
    width: '90px',
    height: '40px',
  },
  medium: {
    width: '130px',
    height: '50px',
  },
  full: {
    width: '100%',
    height: '50px',
  },
};

export const CommonInput = styled.input`
  width: ${props => size[props.size].width};
  height: ${props => size[props.size].height};
  padding: 11px 10px;
  border-radius: 6px;
  border: 1px solid #cbcdcc;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 1.4rem;
  line-height: 1.8rem;
  outline: none;

  &::placeholder {
    color: #949494;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px #55a25a;
  }

  @media (min-width: 740) {
    max-width: 450px;
  }
`;

export const StyledError = styled.div`
  font-size: 1.4rem;
  font-weight: 200;
  color: red;
  margin-top: 10px;
`;
