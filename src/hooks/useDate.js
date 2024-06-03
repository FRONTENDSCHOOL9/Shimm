import { useEffect, useState } from 'react';
import moment from 'moment';

function useDate(events, nav) {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState([]);

  function formatDate(date) {
    return moment(date).format('YYYY-MM-DD');
  }
  function eventForDate(date) {
    const formattedDate = formatDate(date);
    return events.find(
      e => moment(e.time).format('YYYY-MM-DD') === formattedDate,
    );
  }

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
    const currentDate = moment();

    if (nav !== 0) {
      currentDate.add(nav, 'month');
    }

    const day = currentDate.date().toString().padStart(2, '0');
    const month = currentDate.month();
    const year = currentDate.year();
    const firstDayOfMonth = currentDate.clone().startOf('month');
    const daysInMonth = currentDate.daysInMonth();
    const dateString = firstDayOfMonth.format('dddd');

    setDateDisplay(`${currentDate.format('MMMM')} ${year}`);

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = moment(
        `${year}-${month + 1}-${i - paddingDays}`,
        'YYYY-MM-DD',
      );
      const formattedDate = dayString.format('YYYY-MM-DD');

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: event ? event : null,
          date: formattedDate,
          isCurrentDay: i - paddingDays === Number(day) && nav === 0,
        });
      } else {
        daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }

    setDays(daysArr);
  }, [events, nav]);

  return {
    days,
    dateDisplay,
  };
}
export default useDate;
