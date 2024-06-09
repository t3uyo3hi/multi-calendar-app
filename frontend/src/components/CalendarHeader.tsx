import React from "react";
<<<<<<< HEAD
=======
import { Container, Button } from "react-bootstrap";
>>>>>>> origin/main

interface CalendarHeaderProps {
  date: Date;

  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarHeader = (props: CalendarHeaderProps) => {
  const thisYear = props.date.getFullYear();
  const thisMonth = props.date.getMonth();

  const handleChangeCalendar = (pager: string) => {
    if (pager === "prev") {
      props.setDate(new Date(thisYear, thisMonth - 1));
    } else if (pager === "next") {
      props.setDate(new Date(thisYear, thisMonth + 1));
    }
  };

  return (
    <header className="l_header p-5">
      <Container fluid className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            className="btn me-4 fs-4 text-black"
            onClick={() => handleChangeCalendar("prev")}
          >
            <i className="bi bi-chevron-left" />
          </Button>
          <h1
            // className="l_header-title mb-0 fs-1 fw-bold text-black text-center"
            id="js_calendar-header"
          >
            {months[thisMonth]} {thisYear}
          </h1>
          <Button
            variant="link"
            className="btn ms-4 fs-4 text-black"
            onClick={() => handleChangeCalendar("next")}
          >
            <i className="bi bi-chevron-right" />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default CalendarHeader;
