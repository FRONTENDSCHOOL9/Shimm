
import styled from "styled-components";

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
}


export const CommonInput = styled.input`
  width: ${props => size[props.size]?.width};
  height: ${props => size[props.size]?.height};
  border-radius: 6px;
  border: 1px solid #CBCDCC;
  background-color: #fff;

  &:focus {
    box-shadow: inset 0 0 0 2px #55A25A;
  }

  @media (min-width: 740) {
    max-width: 450px;
  }
`
