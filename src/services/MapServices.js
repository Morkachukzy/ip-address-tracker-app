import mapboxgl from "mapbox-gl";
import axios from "axios";
const accessToken =
  "pk.eyJ1IjoiY2h1a2Ftb3JrYSIsImEiOiJja3h1NWliMnUycTRpMm9rbzM4ZXRvYXNuIn0.gip9F7ZDmPX1Jj4JKQ3edA";

mapboxgl.accessToken = accessToken;

let map = {};
let marker = {};
const setMap = (lng, lat) => {
  return new mapboxgl.Map({
    container: "map-view",
    style: "mapbox://styles/chukamorka/ckxu5o89y2rda16q0hipaq4l4",
    center: [lng, lat],
    zoom: 7,
  });
};
const setMarker = (map, lng, lat) => {
  return new mapboxgl.Marker({
    color: "#00000",
    draggable: false,
  })
    .setLngLat([lng, lat])
    .addTo(map);
};

export default {
  name: "MapServices",
  createMapLayer({ lat, lng }) {
    map = setMap(lng, lat);
    marker = setMarker(map, lng, lat);
  },
  getIpGeolocationData(ip) {
    console.log("AXIOS", ip);
    return axios
      .get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_1Np4h7QVWa6CyvJ8FTIbqMZNvvkot&ipAddress=${ip}`
      // `https://geo.ipify.org/api/v2/country,city?apiKey=at_enyO5FyU6YYdcX4wLmTmDusrYsnEs&ipAddress=${ip}`
      );
  },
  flyToPosition({ lat, lng }) {
    map.flyTo({
      center: [lng, lat],
      essential: true,
    });
    marker = marker.remove();
    marker = setMarker(map, lng, lat);
  },
};
