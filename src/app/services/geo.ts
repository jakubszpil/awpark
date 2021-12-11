import { geoJSON, latLngBounds, layerGroup } from "leaflet";
import osmtogeojson from "osmtogeojson";

export const getPolygons = async (map: any, value: any) => {
  var overpassApiUrl = `https://lz4.overpass-api.de/api/interpreter?data=[out:json][timeout:5];(way(${value})[amenity=parking];way(${value})[highway~%22(residential%7Cprimary%7Csecondary%7Cunclassified%7Cservice)%22];);out%20body;%3E;out%20skel%20qt;`;
  // console.log(overpassApiUrl);

  return fetch(overpassApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((osmDataAsJson) => {
      console.log(osmDataAsJson);
      var resultAsGeojson = osmtogeojson(osmDataAsJson);
      const polyLayerGroup = layerGroup();
      //@ts-ignore
      geoJSON(resultAsGeojson, {
        style: function (feature: any) {
          return {
            color:
              feature.feature?.properties?.access === "yes"
                ? "#32689c"
                : "#c43f3f",
          };
        },
        filter: function (feature: any) {
          var isPolygon =
            feature.geometry &&
            feature.geometry.type !== undefined &&
            feature.geometry.type === "Point";
          if (isPolygon) {
            feature.geometry.type = "Point";
            var polygonCenter = latLngBounds(
              feature.geometry.coordinates[0]
            ).getCenter();
            feature.geometry.coordinates = [
              polygonCenter.lat,
              polygonCenter.lng,
            ];
          }
          return true;
        },
        onEachFeature: function (feature: any, layer: any) {
          var popupContent = "";

          var keys = Object.keys(feature.properties ?? {});
          keys.forEach(function (key) {
            popupContent =
              popupContent +
              "<dt>" +
              key +
              "</dt><dd>" +
              feature.properties[key] +
              "</dd>";
          });
          popupContent = popupContent + "</dl>";
          layer.bindPopup(popupContent);
        },
      }).addTo(polyLayerGroup);

      return polyLayerGroup;
    });
};
