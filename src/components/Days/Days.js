import React, { useState } from "react";
import { addDays, format } from "date-fns";

function Days({ handleClickDay }) {
  const [actualDay, setActualDay] = useState(0);
  const date = new Date();

  let days = [];
  days.push(date);

  for (let i = 1; i < 5; i = i + 1) {
    days.push(addDays(date, i));
  }

  function handleDay(event) {
    const index = parseInt(event.target.id);
    setActualDay(index);
    handleClickDay(index);
  }

  return (
    <div className="card-action">
      {days.map((day, index) => (
        <a
          href="#"
          id={index}
          key={index}
          className={index === actualDay ? "clickedDay" : ""}
          onClick={handleDay}
        >
          {format(day, "EEEE")}
        </a>
      ))}
    </div>
  );
}

export default Days;
