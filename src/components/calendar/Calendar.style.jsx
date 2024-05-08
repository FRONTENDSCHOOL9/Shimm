import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  padding: 20px;
  max-width: 1000px;
  min-width: 440px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  gap: 30px;
  /* overflow-x: auto; */
`;

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 20px red;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.4rem;
  width: 140px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  max-width: 800px;
  gap: 4px;
`;

export const Day = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #55a25a;
  border-radius: 4px;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #335635;
  }
`;

export const DayNumber = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
  margin: 0;
`;

export const EventName = styled.span`
  font-size: 1.2rem;
  color: #fefefe;
  display: block;
`;
