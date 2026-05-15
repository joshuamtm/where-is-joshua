import { CONTACT_PHONE } from "../config";

export default function Footer() {
  const phoneReady = CONTACT_PHONE.trim().length > 0 && !CONTACT_PHONE.includes("X");

  return (
    <footer className="mt-2 border-t border-gray-200 px-5 pb-10 pt-5 text-center">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
        {phoneReady && (
          <a
            href={`sms:${CONTACT_PHONE}`}
            className="text-sm font-medium text-cta underline-offset-2 hover:underline"
          >
            Text me
          </a>
        )}
        <a
          href="/route.kml"
          download
          className="text-sm font-medium text-cta underline-offset-2 hover:underline"
        >
          Download KML
        </a>
      </div>
      <p className="mt-4 text-xs text-gray-400">Built in a night with Claude Code</p>
    </footer>
  );
}
