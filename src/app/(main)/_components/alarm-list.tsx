"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

type Alarm = {
  id: number;
  name: string;
  time: string;
  active: boolean;
};

const initialAlarms: Alarm[] = [
  { id: 1, name: "Mi alarma madrugadora", time: "05:30", active: true },
  { id: 2, name: "Trabajo", time: "08:00", active: true },
  { id: 3, name: "Siesta", time: "15:30", active: false },
];

export function AlarmList() {
  const alarms = initialAlarms;
  const [selectedId, setSelectedId] = useState(initialAlarms[0].id);

  return (
    <section className="flex flex-col gap-4 min-w-75 flex-[1_1_25%]">
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-[22px]">Tus alarmas</h1>
        <button
          aria-label="Agregar alarma"
          className="flex items-center justify-center size-8 rounded-full bg-primary text-white cursor-pointer hover:bg-primary-200 active:bg-primary-200"
        >
          <Plus size={18} />
        </button>
      </header>

      {alarms.map(({ id, name, time }) => (
        <article
          key={id}
          onClick={() => setSelectedId(id)}
          className={`flex flex-col gap-2 border border-solid rounded-[14px] p-4.5 cursor-pointer hover:outline-1 hover:outline-primary-200 ${
            selectedId === id
              ? "bg-primary-100/40 border-primary-100"
              : "bg-white border-hard-gray"
          }`}
        >
          <h2 className="text-[13px] font-bold">{name}</h2>
          <hr className="border-hard-gray w-24" />
          <span className="font-bold text-[28px]">{time}</span>
        </article>
      ))}
    </section>
  );
}
