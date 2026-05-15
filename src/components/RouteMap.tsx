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

// Tight bounds: just north of Houston St (south) up to 72nd St (north),
// roughly Hudson River (west) to 5th Ave (east). Crops Belvedere
// Castle (~79th St) off the map view — still visible in the timeline.
const bounds: LatLngBoundsExpression = L.latLngBounds(
  L.latLng(40.7245, -74.012),
  L.latLng(40.7745, -73.965)
);

export default function RouteMap() {
  return (
    <div className="px-5 pb-4">
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <MapContainer
          bounds={bounds}
          scrollWheelZoom={false}
          className="h-[70vh] max-h-[600px] w-full"
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
