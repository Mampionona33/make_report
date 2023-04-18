document.addEventListener("DOMContentLoaded", function () {
  const fullCalendarElement = document.getElementById("full-calendar");
  if (fullCalendarElement) {
    const calendar = new FullCalendar.Calendar(fullCalendarElement, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
    });
    calendar.render();
  } else {
    console.error("full-calendar element not found!");
  }
});
