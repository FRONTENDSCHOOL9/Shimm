import styled from 'styled-components';
import iconDown from '@assets/images/icon-down.svg';

export const TimeSetting = styled.div``;

export const Menu = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 30px;

  @media (min-width: 740px) {
    margin-bottom: 60px;
  }
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  color: ${props =>
    props.$active === true ? '#7BB67F' : 'rgba(84, 89, 86, 1)'};
  border: 1px solid rgba(156, 160, 157, 1);
  border-radius: 8px;

  position: relative;

  &:focus {
    border-color: rgba(51, 86, 53, 1);
  }
`;

export const DropIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: ${props =>
    props.$rotation === '180'
      ? 'translateY(-50%) rotate(180deg)'
      : 'translateY(-50%)'};
`;

export const StyledUl = styled.ul`
  width: 100%;
  margin-top: 8px;

  overflow: hidden;
  border: 1px solid rgba(156, 160, 157, 1);
  box-sizing: border-box;
  border-radius: 8px;
  max-height: ${props => (props.$active === true ? 'unset' : 0)};
`;

export const StyledLi = styled.li``;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
  border-radius: 8px;
  color: rgba(66, 66, 66, 1);
  border: 1px solid transparent;

  &:hover {
    background-color: #f0f5ed;
  }

  &:focus {
    border-color: rgba(115, 146, 125, 1);
  }
`;
