import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AlarmList } from "./_components/alarm-list";

export default function MainPage() {
  const history = [
    { day: "L", height: "40%" },
    { day: "M", height: "56%" },
    { day: "X", height: "74%" },
    { day: "J", height: "100%" },
    { day: "V", height: "62%" },
    { day: "S", height: "22%" },
    { day: "D", height: "84%" },
  ];

  return (
    <main className="bg-[#f3f3f0] flex-1 w-full py-4.75 px-8 flex gap-6 flex-wrap items-start">
      <AlarmList />

      <article className="bg-white border border-solid border-hard-gray p-5 text-gray-500 rounded-[14px] flex-[1_1_60%] min-w-100 gap-4 flex flex-col">
        <header className="flex flex-col gap-1">
          <h2 className="text-[22px] font-bold text-black">Historial</h2>
          <span className="text-xs">Últimos 7 días</span>
          <Link
            href="/history"
            className="flex items-center gap-1 w-fit text-xs font-bold text-black hover:text-primary"
          >
            Ver detalle <ArrowRight size={14} />
          </Link>
        </header>
        <div>
          <article className="grid grid-cols-7 gap-x-11 gap-y-1 justify-items-center px-13 items-end text-[11px] h-72 grid-rows-[1fr_auto]">
            {history.map(({ day, height }, index) => (
              <div
                key={day}
                className={`w-7 rounded-t-[5px] ${
                  index === history.length - 1
                    ? "bg-primary"
                    : "bg-primary-100"
                }`}
                style={{ height }}
              />
            ))}
            {history.map(({ day }) => (
              <span key={day}>{day}</span>
            ))}
          </article>
          <hr className="border-hard-gray" />
        </div>
      </article>
    </main>
  );
}
