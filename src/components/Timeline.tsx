import { stops } from "../data/route";

export default function Timeline() {
  return (
    <section className="px-5 pb-6 pt-2">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
        Today&rsquo;s route
      </h2>
      <ol className="space-y-3">
        {stops.map((s) => (
          <li
            key={s.ordinal}
            className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="route-pin shrink-0" aria-hidden="true">
              {s.ordinal}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-base font-semibold text-gray-900">{s.name}</p>
                <p className="text-sm font-medium text-route">{s.time}</p>
              </div>
              <p className="mt-1 text-sm leading-snug text-gray-700">{s.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
