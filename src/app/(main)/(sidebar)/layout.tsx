export default function SidebarLayout({ children }: LayoutProps<"/">) {
  return (
    <section className="flex">
      <aside className="p-6 sticky top-26.25 min-w-66 h-[calc(100dvh-6.5625rem)] border-r border-solid border-hard-gray flex flex-col gap-6">
        <h2 className="font-bold text-[22px]">Alarma</h2>
        <article className="flex flex-col gap-1">
          <span className="block font-bold text-4xl">08:00</span>
          <span className="block text-sm text-gray-500">
            Lun · Mar · Mié · Jue · Vie
          </span>
        </article>
        <hr className="border-hard-gray" />
        <section className="flex flex-col gap-4">
          <article className="flex flex-col gap-1">
            <h3 className="uppercase font-bold text-[11px] text-gray-500">
              Nombre
            </h3>
            <p className="text-sm">Mi alarma madrugadora</p>
          </article>

          <article className="flex flex-col gap-1">
            <h3 className="uppercase font-bold text-[11px] text-gray-500">
              Sonido
            </h3>
            <p className="text-sm">Chiptune</p>
          </article>

          <article className="flex flex-col gap-1">
            <h3 className="uppercase font-bold text-[11px] text-gray-500">
              Juegos
            </h3>
            <p className="text-sm">Zip, Reinas, Mini Sudoku</p>
          </article>
        </section>
      </aside>
      {children}
    </section>
  );
}
