import React from "react";


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

export default DayOfWeekHead;
