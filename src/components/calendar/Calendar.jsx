// import React from 'react';
// import {
//   Calendar,
//   Container,
//   Day,
//   DayNumber,
//   EventName,
//   Header,
// } from '@components/calendar/Calendar.style';
// import { useState, useEffect } from 'react';
// import useCustomAxios from '@hooks/useCustomAxios.mjs';
// import useUserStore from '@zustand/user.mjs';
// import ModalWindow from '@components/modal/ModalWindow';
// import useModalStore from '@zustand/modal.mjs';

// function MyCalendar() {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [events, setEvents] = useState([]);
//   const axios = useCustomAxios();
//   const { user } = useUserStore();
//   const modalStore = useModalStore();
//   const [showModal, setShowModal] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, [currentMonth, currentYear, user._id]);

//   function previousMonth() {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   }

//   function nextMonth() {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   }

//   useEffect(() => {
//     updateCalendar(currentMonth, currentYear);
//   }, [currentMonth, currentYear]);

//   async function fetchEvents() {
//     try {
//       const res = await axios.get(
//         `/posts?type=meditation&year=${currentYear}&month=${currentMonth + 1}`,
//       );
//       if (res.data && res.data.item) {
//         const EventsRes = res.data.item
//           .filter(item => item.user._id === user._id)
//           .map(item => ({
//             time: item.updatedAt,
//             title: item.content,
//           }));
//         setEvents(EventsRes);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   function drawBlankCalendar() {
//     const blankDays = [];
//     for (let i = 0; i < 35; i++) {
//       blankDays.push(
//         <div key={i} className="day">
//           <p className="day-text"></p>
//           <p className="day-number"></p>
//           <small className="event-name"></small>
//         </div>,
//       );
//     }
//     return blankDays;
//   }

//   function groupEventsByMonth(events) {
//     const eventsByMonth = {};
//     events.forEach(event => {
//       const eventDate = new Date(event.time);
//       const month = eventDate.getMonth();
//       const year = eventDate.getFullYear();
//       const key = `${year}-${month}`;

//       if (!eventsByMonth[key]) {
//         eventsByMonth[key] = [];
//       }
//       eventsByMonth[key].push(event);
//     });
//     return eventsByMonth;
//   }

//   function updateCalendar(month, year, events) {
//     const theFirst = new Date();
//     theFirst.setMonth(month);
//     theFirst.setYear(year);
//     const theFirstDayOfWeek = theFirst.getDay();
//     const monthName = months[month];
//     const monthWithYear = `${year} - ${monthName}`;
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = drawBlankCalendar();
//     let dayCounter = 1;

//     const updatedCalendarDays = calendarDays.map((day, i) => {
//       // const dayNumberElement = day.props.children[1];
//       // const dayTextElement = day.props.children[0];
//       const eventNameElement = day.props.children[0];

//       let dayNumber, dayText;

//       if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
//         dayNumber = <span key="dayNumber">{dayCounter}</span>;
//         dayCounter++;
//       } else {
//         dayNumber = <span key="dayNumber"></span>;
//       }

//       dayText = <span key="dayText">{days[i % 7]}</span>;

//       return React.cloneElement(day, {}, [
//         dayText,
//         dayNumber,
//         eventNameElement,
//       ]);
//     });

//     return updatedCalendarDays;
//   }

//   function renderCell(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const day = date.getDate();
//     const key = `${year}-${month}`;

//     const eventsByMonth = groupEventsByMonth(events);
//     const eventsForDay = eventsByMonth[key]
//       ? eventsByMonth[key].filter(
//           event => new Date(event.time).getDate() === day,
//         )
//       : [];

//     function handleCellClick(event) {
//       setShowModal(true);
//       console.log(event);
//       setModalData(event);
//     }

//     if (eventsForDay.length > 0) {
//       return (
//         <div>
//           {eventsForDay.map((event, index) => (
//             <EventName
//               key={index}
//               className="event-name"
//               onClick={() => handleCellClick(event)}
//             >
//               {event.title}
//             </EventName>
//           ))}
//         </div>
//       );
//     }
//   }

//   function handleCloseModal() {
//     setShowModal(false);
//   }

//   return (
//     <>
//       <Container>
//         <Header>
//           <button className="navigation" onClick={previousMonth}>
//             &lt;
//           </button>
//           <h1 id="month">{`${currentYear} - ${months[currentMonth]}`}</h1>
//           <button className="navigation" onClick={nextMonth}>
//             &gt;
//           </button>
//         </Header>
//         <Calendar>
//           {updateCalendar(currentMonth, currentYear).map((day, index) => (
//             <Day key={index}>
//               <p className="day-text">{day.props.children[0].props.children}</p>
//               {renderCell(
//                 new Date(
//                   currentYear,
//                   currentMonth,
//                   day.props.children[1].props.children,
//                 ),
//               )}
//               <DayNumber>{day.props.children[1].props.children}</DayNumber>
//             </Day>
//           ))}
//         </Calendar>
//       </Container>
//       {modalStore.showModal && (
//         <ModalWindow
//           button={1}
//           handleClose={handleCloseModal}
//           showModal={showModal}
//           handleOk={handleCloseModal}
//         >
//           <div>
//             <p>Time: {modalData.time}</p>
//             <p>Title: {modalData.title}</p>
//           </div>
//         </ModalWindow>
//       )}
//     </>
//   );
// }

// export default MyCalendar;

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
} from '@components/calendar/Calendar.style';
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

  return (
    <CalendarWrapper>
      <Container>
        <CalendarHeader>
          <MonthDisplay>{dateDisplay}</MonthDisplay>
          <ButtonWrapper>
            <CalendarButton onClick={onBack} id="backButton">
              BACK
            </CalendarButton>
            <CalendarButton onClick={onNext} id="nextButton">
              NEXT
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
                onClick={() => setClicked(item.date)}
              >
                {item.value !== 'padding' && item.value}
                {/* {console.log(item.date)} */}
                {events && events.length > 0 && (
                  <EventIndicator>
                    {events.map(
                      (event, eventIndex) =>
                        new Date(event.time).toDateString() ===
                          new Date(item.date).toDateString() && (
                          <div key={eventIndex}>{event.title}</div>
                        ),
                    )}
                  </EventIndicator>
                )}
              </DayCell>
            ))}
        </Calendar>
      </Container>
    </CalendarWrapper>
  );
}

export default MyCalendar;
