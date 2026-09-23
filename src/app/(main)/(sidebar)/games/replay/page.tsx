const mapa = Array.from({ length: 6 }).map(() =>
  Array.from<number | undefined>({ length: 6 }),
);

mapa[3][2] = 1;
mapa[2][3] = 2;
mapa[3][4] = 3;
mapa[2][1] = 4;
mapa[4][0] = 5;
mapa[4][5] = 6;
mapa[1][0] = 7;
mapa[1][5] = 8;

export default function ReplayPage() {
  return (
    <main className="bg-[#f3f3f0] flex-1 w-full py-12 px-9 flex flex-col">
      <section className="flex-1 flex-wrap border border-solid border-hard-gray rounded-[14px] flex">
        <section className="flex-1/2 bg-primary-100/20 rounded-l-[14px] flex flex-col items-center gap-6 p-10 shrink-0 justify-center">
          <h2 className="font-semibold text-lg">Tablero</h2>
          <table className="[&_td]:border-2 [&_td]:border-hard-gray [&_td]:size-20 bg-white [&_td]:border-dotted w-120">
            <tbody>
              {mapa.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-3">
                      {cell ? (
                        <span className="rounded-full size-full flex items-center justify-center bg-black text-white text-xl font-semibold">
                          {cell}
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="flex-1/2 rounded-r-[14px] bg-white flex flex-col items-center gap-6 p-10 shrink-0 justify-center">
          <h2 className="font-semibold text-lg">Solución</h2>
          <div className="relative">
            <table className="[&_td]:border-2 [&_td]:border-hard-gray [&_td]:size-20 bg-white [&_td]:border-dotted max-w-121 relative">
              <tbody>
                {mapa.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-3">
                        {cell ? (
                          <span className="rounded-full size-full flex items-center justify-center bg-black text-white text-xl font-semibold z-10 relative">
                            {cell}
                          </span>
                        ) : (
                          ""
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <svg
              className="absolute inset-0 size-full pointer-events-none"
              width={482}
              height={482}
              viewBox="0 0 482 482"
            >
              <defs>
                <linearGradient
                  id="line"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#0448d4"></stop>
                  <stop offset="100%" stopColor="#b134af"></stop>
                </linearGradient>
              </defs>
              <polyline
                points="201,281 201,201 281,201 281,281 361,281 361,361 121,361 121,201 41,201 41,441 441,441 441,201 361,201 361,121 41,121 41,41 441,41 441,121"
                fill="none"
                stroke="url(#line)"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></polyline>
            </svg>
          </div>
        </section>
      </section>
    </main>
  );
}

//1146.75  300
