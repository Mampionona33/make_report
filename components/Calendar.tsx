import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useAppDispatch } from "@/hooks/hooks";
import { openModal } from "./Modal/ModalSlice";
import { DayCellContentArg } from "@fullcalendar/core";

const Calendar = () => {
  const [dateClicked, setDateClicked] = useState(false);
  const dispatch = useAppDispatch();

  const handleDayCellContent = (arg: DayCellContentArg) => {
    const container = document.createElement("div");

    if (arg) {
      console.log(arg);
      const button = document.createElement("button");
      const text = document.createTextNode(arg.dayNumberText);
      button.innerHTML = "Click me";
      container.appendChild(text);
      container.appendChild(button);
      const arrayOfDomNodes = [container];
      return { domNodes: arrayOfDomNodes };
    }
  };
  const handleDateClick = (info: DateClickArg) => {
    setDateClicked(!dateClicked);
    dispatch(openModal());
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
        dayCellContent={handleDayCellContent}
      />
    </React.Fragment>
  );
};

export default Calendar;
