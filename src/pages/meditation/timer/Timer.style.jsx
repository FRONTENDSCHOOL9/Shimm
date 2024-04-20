import styled from 'styled-components';

export const StyledTimer = styled.div`
  font-size: 4.4rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const TimerDiv = styled.div`
  width: 100%;
  padding: 50px 70px;
  box-sizing: border-box;
  border-radius: 28px;
  background-color: rgba(250, 250, 250, 0.5);
  text-align: center;

  & span {
    display: block;
    margin-top: 40px;
    font-size: 2rem;
    line-height: 3.4rem;
  }

  @media (min-width: 740px) {
    font-size: 4.8rem;

    & span {
      margin-top: 60px;
    }
  }
`;
