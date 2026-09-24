import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AlarmList } from "./_components/alarm-list";

export default function MainPage() {
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
      </article>
    </main>
  );
}
