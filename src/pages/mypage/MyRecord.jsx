import styled from 'styled-components';
import { MyInfoWrapper } from '@pages/mypage/MyInfo';
import Calendar from '@components/calendar/Calendar';
import MyCalendar from '@components/calendar/Calendar';
import { CalendarWrapper } from '@components/calendar/Calendar.style';

const TitleSpan = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

function MyRecord() {
  return (
    <CalendarWrapper>
      <TitleSpan>나의 기록</TitleSpan>
      <MyCalendar />
    </CalendarWrapper>
  );
}

export default MyRecord;
