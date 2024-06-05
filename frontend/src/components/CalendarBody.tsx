import React from "react";

interface CalendarBodyProps {
  date: Date;
}

const DayOfWeekHead = () => {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="calendar_table-head ">
      {weeks.map((week, index) => (
        <div className="calendar_table-data" key={index}>
          {week}
        </div>
      ))}
    </div>
  );
};

const CalendarBody = (props: CalendarBodyProps) => {
  const thisYear = props.date.getFullYear();
  const thisMonth = props.date.getMonth();

  const today = new Date(); // 今日の日付
  const thisFirstDayOfWeek = new Date(thisYear, thisMonth, 1).getDay(); // 今月初日の曜日
  const thisLastDay = new Date(thisYear, thisMonth + 1, 0).getDate(); // 今月末日
  const lastDayOfLastMonth = new Date(thisYear, thisMonth, 0).getDate(); // 先月末日
  const rowNumber = Math.ceil((thisFirstDayOfWeek + thisLastDay) / 7); // カレンダーの行数
  let dayCount = 1;

  return (
    <div className="text-center calendar">
      <DayOfWeekHead />
      {[...Array(rowNumber)].map((_, week) => (
        <div className="calendar_table-row d-flex" key={week}>
          {[...Array(7)].map((_, day) => {
            if (week === 0 && day < thisFirstDayOfWeek) {
              const num = lastDayOfLastMonth - thisFirstDayOfWeek + day + 1;
              return (
                <div className="calendar_table-data p-4 is-disabled" key={day}>
                  <span className="calendar_date">{num}</span>
                </div>
              );
            } else if (dayCount > thisLastDay) {
              const num = dayCount - thisLastDay;
              dayCount++;
              return (
                <div className="calendar_table-data p-4 is-disabled" key={day}>
                  <span className="calendar_date">{num}</span>
                </div>
              );
            } else if (
              today.getFullYear() === thisYear &&
              today.getMonth() === thisMonth &&
              today.getDate() === dayCount
            ) {
              const num = dayCount;
              dayCount++;
              return (
                <div className="calendar_table-data p-4 " key={day}>
                  <span className="calendar_date is_today">{num}</span>
                </div>
              );
            } else {
              const num = dayCount;
              dayCount++;
              return (
                <div className="calendar_table-data p-4" key={day}>
                  <span className="calendar_date">{num}</span>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
