import styled from 'styled-components';

// const bgColor = {
//   T01: 'linear-gradient(45deg, #B5DE13 0%, #06B7AC 100%)',
//   T02: 'linear-gradient(45deg, #93DADF 0%, #4E81EB 100%)',
//   T03: 'linear-gradient(45deg, #60E66D 0%, #F6815B 100%)',
//   T04: 'linear-gradient(45deg, #FF8541 0%, #F0B31A 100%)',
//   T05: 'linear-gradient(45deg, #9A17C8 0%, #4E81EB 100%)',
// };

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
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${props => props.$url});
    background-size: cover;
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
  right: 5px;
  top: 5px;
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
