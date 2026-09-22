export default function HistoryPage() {
  return (
    <main className="bg-[#f3f3f0] w-full py-4.75 px-8 flex flex-col gap-9">
      <h1 className="font-bold text-primary text-[28px]">
        Historial de Mi alarma madrugadora
      </h1>
      <section className="w-full flex gap-4 flex-wrap">
        <article className="min-w-75 bg-white rounded-[14px] border border-solid border-hard-gray p-5 text-gray-500 flex flex-col gap-2 flex-[1_1_30%]">
          <h2 className="text-[13px]">Juegos jugados</h2>
          <span className="font-bold text-[28px] text-black">18</span>
          <p className="text-xs">+12% vs la semana anterior</p>
        </article>

        <article className="min-w-75 bg-white rounded-[14px] border border-solid border-hard-gray p-5 text-gray-500 flex flex-col gap-2 flex-[1_1_30%]">
          <h2 className="text-[13px]">Alarmas postergadas</h2>
          <span className="font-bold text-[28px] text-black">3</span>
          <p className="text-xs">2 menos que la semana anterior</p>
        </article>

        <article className="min-w-75 bg-white rounded-[14px] border border-solid border-hard-gray p-5 text-gray-500 flex flex-col gap-2 flex-[1_1_30%]">
          <h2 className="text-[13px]">Tiempo promedio</h2>
          <span className="font-bold text-[28px] text-black">01:42</span>
          <p className="text-xs">Para completar el reto</p>
        </article>
      </section>
      <section className="flex gap-4 flex-wrap">
        <article className="bg-white border border-solid border-hard-gray p-5 text-gray-500 rounded-[14px] flex-[1_1_60%] gap-4 flex flex-col">
          <h2 className="text-[17px] font-bold text-black">Juegos jugados</h2>
          <div>
            <article className="grid grid-cols-7 gap-x-11 gap-y-1 justify-items-center px-13 items-end text-[11px]">
              <div className="h-11 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-20.5 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-27.5 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-34.5 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-22.75 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-14 bg-primary-100 w-7 rounded-t-[5px]" />
              <div className="h-29.5 bg-primary w-7 rounded-t-[5px]" />

              <span>L</span>
              <span>M</span>
              <span>X</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
              <span>D</span>
            </article>
            <hr className="border-hard-gray" />
          </div>
          <p className="flex gap-4.5 text-[11px]">
            <span>Zip 5</span>
            <span>Tango 4</span>
            <span>Patches 3</span>
            <span>Mini Sudoku 3</span>
            <span>Reinas 3</span>
          </p>
        </article>
        <article className="flex flex-col bg-white border border-solid border-hard-gray p-5 rounded-[14px] gap-4.5 flex-[1_1_30%] text-[13px] text-black [&_p]:font-bold [&_p]:">
          <h2 className="text-[17px] font-bold ">Alarmas postergadas</h2>
          <article>
            <h3>Lunes</h3>
            <p>1 vez</p>
            <div className="h-2 w-23.75 bg-primary-100 rounded-full" />
          </article>
          <article>
            <h3>Jueves</h3>
            <p>2 veces</p>
            <div className="h-2 w-47.5 bg-primary-100 rounded-full" />
          </article>
          <article>
            <h3>Resto de la semana</h3>
            <p>0 veces</p>
            <div className="h-2 w-30 bg-primary-100 rounded-full" />
          </article>
        </article>
      </section>
    </main>
  );
}
