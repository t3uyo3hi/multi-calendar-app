import React, { useState } from "react";

interface CalendarBodyProps {
  date: Date;
  onDateClick: (date: Date) => void;
}

const CalendarBody = (props: CalendarBodyProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const thisYear = props.date.getFullYear();
  const thisMonth = props.date.getMonth();

  const today = new Date();
  const thisFirstDayOfWeek = new Date(thisYear, thisMonth, 1).getDay();
  const thisLastDay = new Date(thisYear, thisMonth + 1, 0).getDate();
  const lastDayOfLastMonth = new Date(thisYear, thisMonth, 0).getDate();
  const rowNumber = Math.ceil((thisFirstDayOfWeek + thisLastDay) / 7);
  let dayCount = 1;

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    props.onDateClick(date);
  };

  return (
    <div className="text-center calendar  disp">
      {[...Array(rowNumber)].map((_, week) => (
        <div className="calendar_table-row d-flex" key={week}>
          {[...Array(7)].map((_, day) => {
            if (week === 0 && day < thisFirstDayOfWeek) {
              const num = lastDayOfLastMonth - thisFirstDayOfWeek + day + 1;
              return (
                <div
                  className={`calendar_table-data p-4 is-disabled ${
                    selectedDate?.getDate() === num &&
                    selectedDate?.getMonth() === thisMonth - 1 &&
                    selectedDate?.getFullYear() === thisYear
                      ? "is-selected"
                      : ""
                  }`}
                  key={day}
                  onClick={() =>
                    handleDateClick(new Date(thisYear, thisMonth - 1, num))
                  }
                >
                  <span className="calendar_date">{num}</span>
                </div>
              );
            } else if (dayCount > thisLastDay) {
              const num = dayCount - thisLastDay;
              dayCount++;
              return (
                <div
                  className={`calendar_table-data p-4 is-disabled ${
                    selectedDate?.getDate() === num &&
                    selectedDate?.getMonth() === thisMonth + 1 &&
                    selectedDate?.getFullYear() === thisYear
                      ? "is-selected"
                      : ""
                  }`}
                  key={day}
                  onClick={() =>
                    handleDateClick(new Date(thisYear, thisMonth + 1, num))
                  }
                >
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
                <div
                  className={`calendar_table-data p-4 ${
                    selectedDate?.getDate() === num &&
                    selectedDate?.getMonth() === thisMonth &&
                    selectedDate?.getFullYear() === thisYear
                      ? "is-selected"
                      : ""
                  }`}
                  key={day}
                  onClick={() =>
                    handleDateClick(new Date(thisYear, thisMonth, num))
                  }
                >
                  <span className="calendar_date is_today">{num}</span>
                </div>
              );
            } else {
              const num = dayCount;
              dayCount++;
              return (
                <div
                  className={`calendar_table-data p-4 ${
                    selectedDate?.getDate() === num &&
                    selectedDate?.getMonth() === thisMonth &&
                    selectedDate?.getFullYear() === thisYear
                      ? "is-selected"
                      : ""
                  }`}
                  key={day}
                  onClick={() =>
                    handleDateClick(new Date(thisYear, thisMonth, num))
                  }
                >
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
