import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  padding: 20px;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 740px) {
    padding: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-right: auto;
  align-items: center;
`;

export const CalendarButton = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;

  &:hover {
    background-color: #55a25a;
  }
`;

export const OnBackStyle = styled.img`
  transform: rotate(270deg);
`;

export const OnNextStyle = styled.img`
  transform: rotate(90deg);
`;

export const CalendarHeader = styled.div`
  padding: 10px;
  display: flex;
`;

export const Container = styled.div`
  width: 800px;
  transition: all 0.5s ease;

  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const MonthDisplay = styled.div`
  font-size: 2rem;
  color: #55a25a;
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
`;

export const Weekdays = styled.div`
  width: 100%;
  display: flex;
  color: #347032;
  font-size: 1.2rem;
`;

export const Weekday = styled.div`
  width: 100px;
  padding: 10px;
`;

export const Calendar = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
`;

export const DayCell = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  background-color: white;
  margin: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: ${props => (props.$ispadding ? 'none' : '0px 0px 6px #e8faed')};
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  &:hover {
    background-color: ${props => (props.$ispadding ? 'none' : '#e8faed')};
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    padding: 4px;
    height: 70px;
  }
`;

export const EventIndicator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1.2rem;
  color: black;
  overflow: hidden;
  box-sizing: border-box;

  & > div {
    width: 100%;
    position: relative;
    padding-left: 22px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
      content: '';
      position: absolute;
      margin-left: 10px;
      left: 0%;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #4c7b3b;
    }
  }
  @media screen and (max-width: 740px) {
    display: block;

    & > div {
      font-size: 1rem;
      -webkit-line-clamp: 3;
    }
  }
`;

export const RecordModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    position: relative;
    padding-left: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0%;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #4c7b3b;
    }
  }

  & span {
    font-size: 1.6rem;
    margin-right: 20px;
  }

  @media screen and (max-width: 740px) {
    & span {
      font-size: 1.2rem;
    }
  }
`;
