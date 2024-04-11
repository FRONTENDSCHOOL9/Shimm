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

const SelectButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
  color: ${props => (props.$active === true ? '#7BB67F' : 'unset')};
  position: relative;

  &:focus {
    border: 1px solid rgba(115, 146, 125, 1);
    border-radius: 8px;
    box-sizing: border-box;
  }

  &:after {
    content: ' ';
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url('/src/assets/icon-down.svg');
    background-size: cover;
    position: absolute;
    margin: 0 15px;
    right: 0;
    top: 50%;
    transform: ${props =>
      props.$active === true
        ? 'translateY(-50%) rotate(180deg)'
        : 'translateY(-50%)'};
  }
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
  position: relative;

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

export {
  TimeSetting,
  Menu,
  StyledDiv,
  SelectButton,
  StyledUl,
  StyledLi,
  StyledButton,
};
