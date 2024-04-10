import styled from 'styled-components';

const TimeSetting = styled.div``;

const Menu = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  position: relative;
  text-align: left;
`;

const StyledDiv = styled.div`
  border-radius: 8px;
  border: 1px solid #000;
  box-sizing: border-box;
  color: ${props => (props.$active === true ? '#7BB67F' : 'unset')};
`;

const StyledUl = styled.ul`
  width: 100%;
  position: absolute;
  top: 140%;
  left: 0;
  overflow: hidden;

  border: ${props => (props.$active === true ? '1px solid #000' : 'unset')};
  box-sizing: border-box;
  border-radius: 8px;
  max-height: ${props => (props.$active === true ? 'unset' : 0)};
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
  color: ${props => (props.$active === true ? '#7BB67F' : 'unset')};

  &:focus {
    border: 1px solid rgba(115, 146, 125, 1);
    border-radius: 8px;
    box-sizing: border-box;
  }
`;

const StyledLi = styled.li`
  ${StyledButton}:hover {
    background-color: #f0f5ed;
  }
`;

export { TimeSetting, Menu, StyledDiv, StyledUl, StyledLi, StyledButton };
