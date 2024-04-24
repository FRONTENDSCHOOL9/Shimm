import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  padding: 20px;
  max-width: 640px;
  min-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  overflow-x: scroll;
`;

export const RecordList = styled.ul`
  text-align: left;
  padding: 0;
  list-style: none;
`;

export const StyleGetRecord = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #252121;

  & a {
    color: gray;
  }
`;

export const TodoItemBadge = styled.div`
  width: 6px;
  height: 6px;
  background-color: #55a25a;
  border-radius: 50%;
`;
