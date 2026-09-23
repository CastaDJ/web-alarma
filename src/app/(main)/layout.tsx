import { AlarmClock } from "lucide-react";
import { Navbar } from "./_components/navbar";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <header className="h-26.25 px-10 py-2.5 flex flex-col justify-between border-b-hard-gray border-b border-solid sticky top-0 z-50 bg-white">
        <div className="flex items-center h-12.5 gap-3 px-5">
          <article className="flex items-center justify-center size-9.5 bg-[#EFEFEC] border border-hard-gray border-solid rounded-lg">
            <AlarmClock />
          </article>
          <h1 className="font-bold text-lg">Alarma interactiva</h1>
        </div>
        <Navbar />
      </header>
      {children}
    </>
  );
}
