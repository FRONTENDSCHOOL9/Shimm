import styled from 'styled-components';

export const ThemeSetting = styled.div``;

export const StyledUl = styled.ul`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  transition: all 0.2s ease-in-out;

  @media (min-width: 740px) {
    aspect-ratio: 6/5;
  }
`;
