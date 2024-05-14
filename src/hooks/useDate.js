import { useEffect, useState } from 'react';

function useDate(calendarEvents, nav) {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState([]);

  const eventForDate = date => calendarEvents.find(e => e.date === date);

  useEffect(() => {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();

    if (nav !== 0) {
      currentDate.setMonth(new Date().getMonth() + nav);
    }

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(
      `${currentDate.toLocaleDateString('en-us', { month: 'long' })} ${year}`,
    );
    const startDayIndex = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArr = [];
    for (let i = 1; i <= startDayIndex + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - startDayIndex}/${year}`;

      if (i > startDayIndex) {
        const event = eventForDate(dayString);
        daysArr.push({
          value: i - startDayIndex,
          event: event ? event : null,
          isCurrentDay: i - startDayIndex === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'emptydays',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }
    setDays(daysArr);
  }, [calendarEvents, nav]);

  return {
    days,
    dateDisplay,
  };
}
export default useDate;
