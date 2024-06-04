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
  OnBackStyle,
  OnNextStyle,
} from '@components/calendar/Calendar.style';
import iconDown from '@assets/images/icon-down.svg';
import ModalWindow from '@components/modal/ModalWindow';
import useCustomAxios from '@hooks/useCustomAxios';
import useDate from '@hooks/useDate';
import useUserStore from '@zustand/user';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';

function MyCalendar() {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [userEvents, setUserEvents] = useState([]);
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const { days, dateDisplay } = useDate(userEvents, nav);
  const [showModal, setShowModal] = useState(false);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  useEffect(() => {
    async function fetchEvents() {
      try {
        if (!user) return;

        const res = await axios.get(
          `/posts?type=meditation&year=${currentYear}&month=${currentMonth + 1}`,
        );
        if (res.data && res.data.item) {
          const EventsRes = res.data.item
            .filter(item => item.user._id === user._id)
            .map(item => ({
              time: item.updatedAt.slice(0, 10).replaceAll('.', '-'),
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
        setUserEvents(EventsRes);
      }
    });
  }, [currentYear, currentMonth, user]);

  function onNext() {
    setNav(nextNav => nextNav + 1);
  }

  function onBack() {
    setNav(prevNav => prevNav - 1);
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
            <CalendarButton onClick={onBack}>
              <OnBackStyle src={iconDown} />
            </CalendarButton>
            <CalendarButton onClick={onNext}>
              <OnNextStyle src={iconDown} />
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
          {userEvents &&
            days.map((item, index) => (
              <DayCell
                key={index}
                $ispadding={item.value === 'padding'}
                onClick={() => DayClick(item.date)}
              >
                {item.value !== 'emptydays' && (
                  <>
                    {item.value}
                    {userEvents && userEvents.length > 0 && (
                      <EventIndicator>
                        {userEvents.map(
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
                  </>
                )}
              </DayCell>
            ))}
        </Calendar>
        {showModal &&
          userEvents.some(
            event =>
              new Date(event.time).toDateString() ===
              new Date(clicked).toDateString(),
          ) && (
            <ModalWindow
              button={1}
              handleClose={handleCloseModal}
              handleOk={handleCloseModal}
            >
              <RecordModalStyle>
                {userEvents
                  .filter(
                    event =>
                      new Date(event.time).toDateString() ===
                      new Date(clicked).toDateString(),
                  )
                  .map((event, index) => (
                    <div key={index}>
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
