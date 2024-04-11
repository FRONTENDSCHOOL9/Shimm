import styled from 'styled-components';

const Theme = styled.li`
  background-color: rgba(240, 245, 237, 1);
  aspect-ratio: 1/1;
  border-radius: 8px;
`;

const ThemeButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.5s ease-in-out;

  &:focus {
    box-shadow: inset 0 0 0 2px rgba(51, 86, 53, 1);
    border-radius: 8px;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px rgba(51, 86, 53, 1);
    border-radius: 8px;
  }
`;

const ThemePreview = styled.span`
  box-shadow: inset 0 0 5px blue;
  flex-grow: 1;
`;

const Contents = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Description = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ThemeDescription = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Lock = styled.span`
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const LockIcon = styled.span`
  display: flex;
  justify-content: end;
  margin-bottom: 5px;

  &:before {
    content: ' ';
    display: block;
    width: 18px;
    height: 18px;
    background-image: url('/src/assets/icon-lock.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Price = styled.span`
  font-weight: 200;
  color: rgba(97, 97, 97, 1);
`;

export {
  Lock,
  Theme,
  Price,
  Contents,
  LockIcon,
  Description,
  ThemeButton,
  ThemePreview,
  ThemeDescription,
};
