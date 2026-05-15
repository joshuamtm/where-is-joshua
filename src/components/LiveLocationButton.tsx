import { LIVE_LOCATION_URL } from "../config";

export default function LiveLocationButton() {
  const ready = LIVE_LOCATION_URL.trim().length > 0;

  if (!ready) {
    return (
      <div className="px-5 pb-5 pt-2">
        <button
          type="button"
          disabled
          className="block w-full rounded-2xl bg-gray-200 px-6 py-4 text-center text-base font-semibold text-gray-500 sm:text-lg"
          aria-disabled="true"
        >
          Live location starts at 9 AM
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 pb-5 pt-2">
      <a
        href={LIVE_LOCATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-2xl bg-cta px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-blue-700 hover:shadow-xl active:scale-[0.99] sm:text-lg"
      >
        📍 See Joshua&rsquo;s live location
      </a>
    </div>
  );
}
