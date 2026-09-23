export default function GamesPage() {
  const data = [
    {
      name: "Zip",
      difficulty: "Media",
      size: "60%",
    },
    {
      name: "Tango",
      difficulty: "Fácil",
      size: "33%",
    },
    {
      name: "Patches",
      difficulty: "Media",
      size: "60%",
    },
    {
      name: "Mini Sudoku",
      difficulty: "Difícil",
      size: "86%",
    },
    {
      name: "Queens",
      difficulty: "Difícil",
      size: "86%",
    },
  ];

  return (
    <main className="bg-[#f3f3f0] w-full py-4.75 px-8 flex flex-col gap-9">
      <header className="flex flex-col gap-4.5">
        <div>
          <h1 className="font-bold text-primary text-[28px]">
            Configurar juegos
          </h1>
          <p className="text-sm text-gray-500">
            Seleciona la dificultad de cada uno de los juegos
          </p>
        </div>
        <button className="font-bold text-sm bg-primary text-white py-3 px-5.5 rounded-[14px] w-fit cursor-pointer hover:bg-primary-200 active:bg-primary-200">
          Guardar cambios
        </button>
      </header>
      <section className="w-full flex gap-4 flex-wrap">
        {data.map(({ name, size, difficulty }) => (
          <article
            key={name}
            className="flex justify-between bg-white w-full border border-solid border-hard-gray rounded-[14px] px-4.5 gap-4 py-5 items-center cursor-pointer hover:outline-1 hover:outline-primary-200"
          >
            <h2 className="font-bold flex-[60%]">{name}</h2>
            <div className="flex flex-col min-w-52.5">
              <span className="text-[11px] text-gray-500">Dificultad</span>
              <span className="text-xs font-bold">{difficulty}</span>
              <div className="relative mt-2">
                <div className="h-1.5 bg-[#E4E4E0] rounded-full w-full" />
                <div
                  className="absolute inset-0 h-1.5 bg-primary-100 rounded-full"
                  style={{ width: size }}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
