import {
  CalendarWrapper,
  Calendar,
  Container,
  Weekdays,
  CalendarHeader,
  MonthDisplay,
  CalendarButton,
  Weekday,
  ButtonWrapper,
  DayCell,
  EventIndicator,
  RecordModalStyle,
} from '@components/calendar/Calendar.style';
import ModalWindow from '@components/modal/ModalWindow';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useDate from '@hooks/useDate';
import useUserStore from '@zustand/user.mjs';
import { useEffect, useState } from 'react';

function MyCalendar() {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState([]);
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const { days, dateDisplay } = useDate(events, nav);
  const [showModal, setShowModal] = useState(false);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await axios.get(
          `/posts?type=meditation&year=${currentYear}&month=${currentMonth + 1}`,
        );
        if (res.data && res.data.item) {
          const EventsRes = res.data.item
            .filter(item => item.user._id === user._id)
            .map(item => ({
              time: item.updatedAt,
              title: item.content,
            }));

          return EventsRes;
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchEvents().then(EventsRes => {
      if (EventsRes) {
        setEvents(EventsRes);
      }
    });
  }, [currentYear, currentMonth, user]);

  function onNext() {
    setNav(nav + 1);
  }

  function onBack() {
    setNav(nav - 1);
  }

  function DayClick(date) {
    setClicked(date);
    setShowModal(true);
  }

  function handleCloseModal() {
    setClicked(null);
    setShowModal(false);
  }

  return (
    <CalendarWrapper>
      <Container>
        <CalendarHeader>
          <MonthDisplay>{dateDisplay}</MonthDisplay>
          <ButtonWrapper>
            <CalendarButton onClick={onBack} id="backButton">
              &lt;
            </CalendarButton>
            <CalendarButton onClick={onNext} id="nextButton">
              &gt;
            </CalendarButton>
          </ButtonWrapper>
        </CalendarHeader>

        <Weekdays>
          <Weekday>Sun</Weekday>
          <Weekday>Mon</Weekday>
          <Weekday>Tue</Weekday>
          <Weekday>Wed</Weekday>
          <Weekday>Thu</Weekday>
          <Weekday>Fri</Weekday>
          <Weekday>Sat</Weekday>
        </Weekdays>

        <Calendar>
          {events &&
            days.map((item, index) => (
              <DayCell
                key={index}
                day={item}
                onClick={() => DayClick(item.date)}
              >
                {item.value !== 'padding' && item.value}

                {events && events.length > 0 && (
                  <EventIndicator>
                    {events.map(
                      (event, eventIndex) =>
                        new Date(event.time).toDateString() ===
                          new Date(item.date).toDateString() && (
                          <div key={eventIndex}>
                            <span>{event.title}</span>
                          </div>
                        ),
                    )}
                  </EventIndicator>
                )}
              </DayCell>
            ))}
        </Calendar>
        {showModal && (
          <ModalWindow
            button={1}
            handleClose={handleCloseModal}
            handleOk={handleCloseModal}
          >
            <RecordModalStyle>
              {events
                .filter(
                  event =>
                    new Date(event.time).toDateString() ===
                    new Date(clicked).toDateString(),
                )
                .map((event, index) => (
                  <div key={index}>
                    <span>
                      {new Date(event.time).toLocaleString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </span>
                    <span>{event.title}</span>
                  </div>
                ))}
            </RecordModalStyle>
          </ModalWindow>
        )}
      </Container>
    </CalendarWrapper>
  );
}

export default MyCalendar;
