import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

const Calendar = () => {
  const [dateClicked, setDateClicked] = useState(true);

  const handleDateClick = (info: DateClickArg) => {
    setDateClicked(!dateClicked);

    alert("test");

    if (dateClicked) {
      info.dayEl.style.backgroundColor = "red";
    } else {
      info.dayEl.style.backgroundColor = "rgb(59 130 246 / 0.0)";
    }
  };

  return (
    <React.Fragment>
      <FullCalendar
        contentHeight={"80vh"}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          left: "prev next",
          center: "title",
          end: "today dayGridYear,dayGridMonth,timeGridWeek",
        }}
        dateClick={handleDateClick}
      />
    </React.Fragment>
  );
};

export default Calendar;
