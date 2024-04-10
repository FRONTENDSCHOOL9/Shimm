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
`;

const ThemePreview = styled.span`
  box-shadow: inset 0 0 5px blue;
  flex-grow: 1;
`;

const ThemeDescription = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

export { Theme, ThemeButton, ThemePreview, ThemeDescription };
