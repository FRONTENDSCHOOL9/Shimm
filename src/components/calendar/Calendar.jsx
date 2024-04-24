import {
  RecordList,
  StyleGetRecord,
  TodoItemBadge,
} from '@components/calendar/Calendar.style';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { Calendar, Popover, Whisper } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const { user } = useUserStore();
  const axios = useCustomAxios();
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await axios.get(
          `/posts/users/${user._id}?type=meditation&year=${year}&month=${month}`,
        );

        const EventsRes = res.data?.item?.item.map(item => ({
          time: item.updatedAt,
          title: item.content,
        }));
        setEvents(EventsRes);
      } catch (err) {
        console.error(err);
      }
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    fetchEvents(today);
  }, []);

  function getMeditation(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const filteredEvents = events.filter(event => {
      const eventDate = new Date(event.time);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() + 1 === month &&
        eventDate.getDate() === day
      );
    });

    if (filteredEvents.length > 0) {
      return filteredEvents.map(event => ({
        time: event.time,
        title: event.title,
      }));
    } else {
      return [];
    }
  }

  function renderCell(date) {
    const list = getMeditation(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length > 0) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <StyleGetRecord>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </StyleGetRecord>
      );
      return (
        <RecordList>
          {displayList.map((item, index) => (
            <StyleGetRecord key={index}>
              <TodoItemBadge />
              {item.title}
            </StyleGetRecord>
          ))}
          {moreCount ? moreItem : null}
        </RecordList>
      );
    }
    return null;
  }

  return <Calendar bordered renderCell={renderCell} />;
};

export default MyCalendar;
