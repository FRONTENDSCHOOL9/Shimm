import MyCalendar from '@components/calendar/Calendar';
import { CalendarWrapper } from '@components/calendar/Calendar.style';
import { TitleSpan } from '@pages/mypage/myrecord/MyRecord.style';

function MyRecord() {
  return (
    <CalendarWrapper>
      <TitleSpan>나의 기록</TitleSpan>
      <MyCalendar />
    </CalendarWrapper>
  );
}

export default MyRecord;
