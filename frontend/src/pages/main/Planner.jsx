import React, { useEffect, useMemo, useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isSameWeek,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";

import Header from "../../components/main/planner/header";
import DayView from "../../components/main/planner/dayView";
import WeekView from "../../components/main/planner/weekView";
import MonthView from "../../components/main/planner/monthView";
import AddEventModal from "../../components/main/planner/addEventModal";

const events = [
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-08-01",
    from: "17:00",
    to: "18:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-08-01",
    from: "13:00",
    to: "16:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-08-01",
    from: "9:00",
    to: "10:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-08-01",
    from: "10:00",
    to: "11:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-08-02",
    from: "14:00",
    to: "15:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-08-02",
    from: "9:00",
    to: "12:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-08-02",
    from: "12:00",
    to: "13:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-08-03",
    from: "7:00",
    to: "8:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-08-03",
    from: "9:00",
    to: "10:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-08-03",
    from: "14:00",
    to: "16:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-08-03",
    from: "16:00",
    to: "17:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-08-05",
    from: "10:00",
    to: "11:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-08-05",
    from: "19:00",
    to: "21:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-08-05",
    from: "6:00",
    to: "8:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-08-05",
    from: "13:00",
    to: "14:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-08-05",
    from: "17:00",
    to: "18:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-07-25",
    from: "17:00",
    to: "18:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-07-25",
    from: "13:00",
    to: "16:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-07-25",
    from: "9:00",
    to: "10:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-07-25",
    from: "10:00",
    to: "11:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-07-26",
    from: "14:00",
    to: "15:00",
    desc: "",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-07-27",
    from: "7:00",
    to: "8:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-07-27",
    from: "9:00",
    to: "10:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-07-27",
    from: "14:00",
    to: "16:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-07-27",
    from: "16:00",
    to: "17:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-07-28",
    from: "10:00",
    to: "11:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 12,
    title: "Cardiologie",
    date: "2023-07-28",
    from: "19:00",
    to: "21:00",
    desc: "",
  },
  {
    type: "matiere",
    id: 14,
    title: "Pneumologie",
    date: "2023-07-28",
    from: "6:00",
    to: "8:00",
    desc: "",
  },
  {
    type: "item",
    id: 1,
    title: "188. Endocardite infectieuse",
    date: "2023-07-28",
    from: "13:00",
    to: "14:00",
    desc: "here some description you added",
  },
  {
    type: "item",
    id: 2,
    title: "152. Endocardite infectieuse",
    date: "2023-07-28",
    from: "17:00",
    to: "18:00",
    desc: "",
  },
];

function PlannerPage() {
  const [view, setView] = useState("Day view");
  const [today, setToday] = useState(startOfToday());
  const [selectedDay, setSelectedDay] = useState(today);
  const [firstDayCurrentMonth, setFirstDayCurrentMonth] = useState(
    parse(format(today, "MMM-yyyy"), "MMM-yyyy", new Date())
  );
  const [days, setDays] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(
    eachDayOfInterval({
      start: startOfWeek(selectedDay),
      end: endOfWeek(selectedDay),
    })
  );

  const dailyEvents = useMemo(
    () =>
      events.filter((event) =>
        isSameDay(parse(event.date, "yyyy-MM-dd", new Date()), selectedDay)
      ),
    [selectedDay]
  );
  const weeklyEvents = useMemo(
    () =>
      events.filter((event) =>
        isSameWeek(parse(event.date, "yyyy-MM-dd", new Date()), selectedDay)
      ),
    [selectedDay]
  );
  const monthlyEvents = useMemo(
    () =>
      events.filter((event) =>
        isSameMonth(parse(event.date, "yyyy-MM-dd", new Date()), firstDayCurrentMonth)
      ),
    [firstDayCurrentMonth]
  );

  const [open, setOpen]= useState(false)
  const addEvent = () => {
    setOpen(true)
  };

  const goToToday = () => {
    setSelectedDay(today);
  };

  const next = () => {
    switch (view) {
      case "Day view":
        nextDay();
        break;
      case "Week view":
        nextWeek();
        break;
      case "Month view":
        nextMonth();
        break;
      default:
        break;
    }
  };
  const previous = () => {
    switch (view) {
      case "Day view":
        previousDay();
        break;
      case "Week view":
        previousWeek();
        break;
      case "Month view":
        previousMonth();
        break;
      default:
        break;
    }
  };
  const previousDay = () => {
    setSelectedDay(add(selectedDay, { days: -1 }));
  };
  const nextDay = () => {
    setSelectedDay(add(selectedDay, { days: +1 }));
  };
  const previousWeek = () => {
    setSelectedDay(add(selectedDay, { days: -7 }));
  };
  const nextWeek = () => {
    setSelectedDay(add(selectedDay, { days: +7 }));
  };
  const previousMonth = () => {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setFirstDayCurrentMonth(firstDayPreviousMonth);
  };
  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setFirstDayCurrentMonth(firstDayNextMonth);
  };

  useEffect(() => {
    setSelectedWeek(
      eachDayOfInterval({
        start: startOfWeek(selectedDay),
        end: endOfWeek(selectedDay),
      })
    );
  }, [selectedDay]);

  useEffect(() => {
    const _days_ = eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: endOfMonth(firstDayCurrentMonth),
    }).map((date) => ({
      date: date,
      isCurrentMonth: true,
      isToday: isEqual(today, date),
      isSelected: isEqual(selectedDay, date),
    }));
    for (let i = 1; i < getDay(firstDayCurrentMonth) + 1; i++)
      _days_.unshift({
        date: add(firstDayCurrentMonth, { days: -i }),
        isCurrentMonth: false,
      });
    for (let i = 1; i < 7 - getDay(endOfMonth(firstDayCurrentMonth)); i++)
      _days_.push({
        date: add(endOfMonth(firstDayCurrentMonth), { days: i }),
        isCurrentMonth: false,
      });
    setDays(() => _days_);
  }, [today, firstDayCurrentMonth, selectedDay]);

  useEffect(() => {
    setInterval(() => {
      setToday(startOfToday());
    }, 60000);
  });

  useEffect(() => {
    setFirstDayCurrentMonth(
      parse(format(selectedDay, "MMM-yyyy"), "MMM-yyyy", new Date())
    );
  }, [selectedDay]);

  return (
    <div className="-mx-4 -mt-24 -mb-10 pt-16 sm:-mx-6 px-2 sm:px-6 pb-8 lg:-mt-10 lg:px-8 lg:-mx-8 lg:pt-4 h-screen bg-gray-50 ">
      <div className="flex h-full flex-col">
        <Header
          title={format(firstDayCurrentMonth, "MMMM yyyy")}
          view={view}
          setView={setView}
          addEvent={addEvent}
          control={{ goToToday, previous, next }}
        />
        {view === "Day view" && (
          <DayView
            firstDayCurrentMonth={firstDayCurrentMonth}
            days={days}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            events={dailyEvents}
            previousMonth={previousMonth}
            nextMonth={nextMonth}
            selectedWeek={selectedWeek}
            today={today}
          />
        )}
        {view === "Week view" && (
          <WeekView
            selectedWeek={selectedWeek}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            today={today}
            events={weeklyEvents}
          />
        )}
        {view === "Month view" && (
          <MonthView
            days={days}
            events={monthlyEvents}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        )}
      </div>
      <AddEventModal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default PlannerPage;
