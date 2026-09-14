"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar } from "react-calendar";
// import correct distributable stylesheet for react-calendar
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00pm - 2:00pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00pm - 2:00pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00pm - 2:00pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <section aria-labelledby="calendar-heading" className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h2 id="calendar-heading" className="text-xl font-semibold my-4">Events</h2>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
