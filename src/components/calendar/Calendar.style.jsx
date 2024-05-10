// import styled from 'styled-components';

// export const CalendarWrapper = styled.div`
//   padding: 20px;
//   max-width: 1000px;
//   min-width: 440px;
//   width: 100%;
//   height: 600px;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   box-sizing: border-box;
//   align-items: center;
//   gap: 30px;
//   /* overflow-x: auto; */
// `;

// export const Container = styled.div`
//   padding: 30px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: inset 0 0 20px red;
// `;

// export const Header = styled.div`
//   display: flex;
//   align-items: flex-start;
//   font-size: 1.4rem;
//   width: 140px;
//   margin-bottom: 10px;
//   justify-content: space-between;
// `;

// export const Calendar = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   width: 100%;
//   height: 100%;
//   max-width: 800px;
//   gap: 4px;
// `;

// export const Day = styled.div`
//   width: 100%;
//   height: 100%;
//   color: white;
//   background-color: #55a25a;
//   border-radius: 4px;
//   transition: all 0.5s;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     background-color: #335635;
//   }
// `;

// export const DayNumber = styled.p`
//   font-size: 1.4rem;
//   font-weight: 300;
//   text-align: center;
//   margin: 0;
// `;

// export const EventName = styled.span`
//   font-size: 1.2rem;
//   color: #fefefe;
//   display: block;
// `;

import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 0 auto;
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    max-width: 350px;
  }

  /* @media screen and (max-width: 480px) {
    padding: 10px;
  } */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-right: auto;
  align-items: center;
`;
export const CalendarButton = styled.button`
  font-size: 1rem;
  text-align: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 5px;
  color: white;
  background-color: #55a25a;

  &:hover {
    background-color: #4c7b3b;
  }
`;

export const CalendarHeader = styled.div`
  padding: 10px;
  color: white;
  font-size: 3rem;
  display: flex;
`;

export const Container = styled.div`
  width: 770px;
  transition: all 0.5s ease;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const MonthDisplay = styled.div`
  font-size: 2rem;
  background-color: #55a25a;
  border-radius: 4px;
  padding: 2px;
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
  display: flex;
  flex-wrap: wrap;
`;

export const DayCell = styled.div`
  color: black;

  width: 100px;
  padding: 10px;
  height: 100px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #e8faed;
  }
`;

export const EventIndicator = styled.div`
  font-size: 14px; /* 글자 크기 증가 */
  color: black; /* 글자색 변경 */
  padding: 4px 8px; /* 안쪽 여백 추가 */
  border-radius: 4px; /* 모서리 둥근 정도 */
`;

export const Event = styled.div`
  font-size: 10px;
  padding: 3px;
  background-color: #58bae4;
  color: white;
  border-radius: 5px;
  max-height: 55px;
  overflow: hidden;
`;

// export const Padding = styled.div`
//   cursor: default !important;
//   background-color: #fffcff !important;
//   box-shadow: none !important;
// `;

export const NewEventModal = styled.div`
  z-index: 20;
  padding: 25px;
  background-color: #e8f4fa;
  box-shadow: 0px 0px 3px black;
  border-radius: 5px;
  width: 350px;
  top: 100px;
  left: calc(50% - 175px);
  position: absolute;
  font-family: sans-serif;
`;

export const EventTitleInput = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px gray;

  &.error {
    border: 2px solid red;
  }
`;

export const CancelButton = styled(CalendarButton)`
  background-color: #d36c6c;
`;

export const SaveButton = styled(CalendarButton)`
  background-color: #92a1d1;
`;

export const EventText = styled.div`
  font-size: 14px;
`;

export const ModalBackDrop = styled.div`
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
`;
