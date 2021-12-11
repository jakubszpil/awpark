import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import L, { Map } from "leaflet";

export const calculateDistance = (
  waipointA: [number, number],
  waipointB: [number, number],
  map: Map
) => {
  L.Routing.control({
    router: L.Routing.mapbox(
      "pk.eyJ1IjoiemF2aW9lciIsImEiOiJja3gxZjBxZjIxaGQ1Mm9wOGN4NzcxNXNhIn0.Qi2JSpPL9x1DGQdkDvw4Qw",
      {
        routingOptions: {},
        useHints: false,
      }
    ),
    waypoints: [L.latLng(...waipointA), L.latLng(...waipointB)],
    showAlternatives: false,
  }).addTo(map);
};
