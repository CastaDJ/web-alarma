import { AlarmList } from "./_components/alarm-list";

export default function MainPage() {
  return (
    <main className="bg-[#f3f3f0] flex-1 w-full py-4.75 px-8 flex gap-6 flex-wrap items-start">
      <AlarmList />
    </main>
  );
}
