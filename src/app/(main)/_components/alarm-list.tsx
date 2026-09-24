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
  const [alarms, setAlarms] = useState(initialAlarms);
  const [selectedId, setSelectedId] = useState(initialAlarms[0].id);

  function toggleAlarm(id: number) {
    setAlarms((current) =>
      current.map((alarm) =>
        alarm.id === id ? { ...alarm, active: !alarm.active } : alarm,
      ),
    );
  }

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

      {alarms.map(({ id, name, time, active }) => (
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
          <div className="flex flex-col gap-1">
            <button
              role="switch"
              aria-checked={active}
              aria-label={`${active ? "Desactivar" : "Activar"} ${name}`}
              onClick={(event) => {
                event.stopPropagation();
                toggleAlarm(id);
              }}
              className={`relative h-5 w-9 rounded-full cursor-pointer transition-colors ${
                active ? "bg-primary" : "bg-hard-gray"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${
                  active ? "translate-x-4" : ""
                }`}
              />
            </button>
            <span className="text-[11px] text-gray-500">
              {active ? "Activa" : "Inactiva"}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
