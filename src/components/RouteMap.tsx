import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L, { type LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { stops } from "../data/route";

function pinIcon(ordinal: number) {
  return L.divIcon({
    className: "",
    html: `<div class="route-pin">${ordinal}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -14],
  });
}

const polyline: [number, number][] = stops.map((s) => [s.lat, s.lng]);

const bounds: LatLngBoundsExpression = L.latLngBounds(
  stops.map((s) => L.latLng(s.lat, s.lng))
).pad(0.12);

export default function RouteMap() {
  return (
    <div className="px-5 pb-4">
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <MapContainer
          bounds={bounds}
          scrollWheelZoom={false}
          className="h-[60vh] max-h-[500px] w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline
            positions={polyline}
            pathOptions={{ color: "#e91e63", weight: 4, opacity: 0.85 }}
          />
          {stops.map((s) => (
            <Marker key={s.ordinal} position={[s.lat, s.lng]} icon={pinIcon(s.ordinal)}>
              <Popup>
                <strong>
                  {s.ordinal}. {s.name}
                </strong>
                <br />
                <span className="text-gray-700">{s.time}</span>
                <br />
                {s.note}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
