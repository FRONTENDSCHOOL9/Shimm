import styled from 'styled-components';

export const Theme = styled.li`
  position: relative;
  min-height: 140px;
  border-radius: 8px;
  font-family: 'NanumSquareNeo', sans-serif;
`;

export const ThemeButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  gap: 10px;
  transition: 0.5s ease-in-out;
  border-radius: 8px;
  color: #fff;
  background: ${props => props.$bgColor};
  position: relative;

  display: flex;
  flex-direction: column;

  &:focus {
    box-shadow: inset 0 0 0 3px #55a25a;
    border-radius: 8px;
  }

  &:hover {
    box-shadow: inset 0 0 0 3px #55a25a;
  }

  @media (min-width: 740px) {
    padding: 20px;
  }
`;

export const Contents = styled.span`
  margin-top: auto;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${props => props.$url});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 1px;

  @media (min-width: 740px) {
    margin-bottom: 10px;
  }
`;

export const ThemeDescription = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;

  @media (min-width: 740px) {
    font-size: 1.8rem;
    white-space: nowrap;
  }
`;

export const Lock = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 5px;
  box-sizing: border-box;
  text-align: right;
  z-index: 1;
`;

export const StyledDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

export const LockIcon = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-left: auto;
`;

export const Price = styled.span`
  font-size: 1.4rem;
  font-weight: 200;
  color: #fff;
`;
