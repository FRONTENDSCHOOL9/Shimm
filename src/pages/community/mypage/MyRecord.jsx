import styled from 'styled-components';
import { MyInfoWrapper } from '@pages/community/mypage/MyInfo';
import Calendar from '@components/calendar/Calendar';

const TitleSpan = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

function MyRecord() {
  return (
    <MyInfoWrapper>
      <TitleSpan>나의 기록</TitleSpan>
      <Calendar />
    </MyInfoWrapper>
  );
}

export default MyRecord;
