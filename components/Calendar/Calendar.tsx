import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { openModal } from "../Modal/ModalSlice";
import { fetchOutageAsync } from "@/redux/outagesSlice";
import { log } from "console";
import { IOutages } from "@/pages/api/models/Outage/IOutages";

const Calendar = () => {
  const [dateClicked, setDateClicked] = useState(false);
  const dispatch = useAppDispatch();
  const outages = useAppSelector((state) => state.outages.outages);

  const handleDateClick = (info: DateClickArg) => {
    setDateClicked(!dateClicked);

    if (dateClicked) {
      info.dayEl.style.backgroundColor = "red";
    } else {
      info.dayEl.style.backgroundColor = "rgb(59 130 246 / 0.0)";
    }
  };

  useEffect(() => {
    dispatch(fetchOutageAsync());
  }, [dispatch]);

  useEffect(() => {
    if (outages.length > 0) {
      /* 
        daylyDtptNonCumul = ossDurations / nbTotalSite / 7 "day";
        daylyDtptCumul = somme (daylyDtptNonCumul de 1mois) / daylyDtptNonCumul (date now -1 ) / nombre jour -1 ;
      */
      console.log(outages);
      // const test = outages[0].outages.map((out) => out["OOS Duration"]);
      // console.log(test);

      const ossDurations = outages[0].outages
        .map((out: any) => out["OOS Duration"])
        .reduce((acc, val) => (val !== undefined ? acc + val : acc));
      console.log(outages[0]);
    }
  }, [outages]);

  return (
    <React.Fragment>
      <FullCalendar
        contentHeight={"75vh"}
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
