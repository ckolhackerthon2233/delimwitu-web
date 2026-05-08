"use client";

interface DrinkMenuTableRow {
  title: string;
  desc?: string;
  single?: string;
  double?: string;
  iced?: string;
  badge?: string;
}

interface DrinkMenuTableProps {
  rows: DrinkMenuTableRow[];
  title: string;
  subtitle?: string;
  note?: string;
}

export default function DrinkMenuTable({ rows, title, subtitle, note }: DrinkMenuTableProps) {
  return (
    <section className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <span className="inline-flex items-center rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
            Drinks Table
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-dark-brown sm:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-gray-600">{subtitle}</p>
          ) : null}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr] xl:items-start">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full border-separate border-spacing-0 text-left">
              <thead>
                <tr className="bg-slate-50 text-sm font-semibold uppercase tracking-[0.15em] text-slate-700">
                  <th className="px-5 py-4">Coffee</th>
                  <th className="px-5 py-4">Single</th>
                  <th className="px-5 py-4">Double</th>
                  <th className="px-5 py-4">Iced</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.title} className="border-t border-slate-200 hover:bg-slate-50 transition-colors duration-200">
                    <td className="px-5 py-5 align-top">
                      <div className="flex items-start gap-2">
                        <span className="text-base font-semibold text-dark-brown">{row.title}</span>
                        {row.badge ? (
                          <span className="rounded-full bg-orange text-white px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
                            {row.badge}
                          </span>
                        ) : null}
                      </div>
                      {row.desc ? <p className="mt-1 text-sm text-gray-500">{row.desc}</p> : null}
                    </td>
                    <td className="px-5 py-5 align-top text-sm text-dark-brown">{row.single ?? "—"}</td>
                    <td className="px-5 py-5 align-top text-sm text-dark-brown">{row.double ?? "—"}</td>
                    <td className="px-5 py-5 align-top text-sm text-dark-brown">{row.iced ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="rounded-3xl bg-cream p-6 sm:p-8 border border-slate-200">
            <div className="mb-5 rounded-3xl bg-slate-50 p-6 text-center text-slate-700">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange text-2xl font-black">
                ☕
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">Coffee Selection</p>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                This section groups our coffee choices into a clean menu table. Single, double, and iced prices are shown side by side so customers can compare faster.
              </p>
              <p>
                Use this format for busy drink categories where there are many item variants. Images can be added later when the specific drink photos are downloaded.
              </p>
              {note ? <p className="rounded-2xl bg-white p-4 text-sm text-slate-600 border border-slate-200">{note}</p> : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
