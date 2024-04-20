import styled from 'styled-components';

export const StyledFeed = styled.div`
  box-shadow: inset 0 0 5px red;
  flex-grow: 1;
  position: relative;
  padding: 30px;
`;

export const Post = styled.div`
  box-shadow: inset 0 0 5px blue;
  flex-grow: 1;
  font-size: 1.4rem;
  margin: 0 auto;
  position: relative;
  transition: all 5s ease-in-out;

  display: flex;
  flex-direction: column;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 600px;
  }
`;
