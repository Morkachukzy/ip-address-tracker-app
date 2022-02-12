<template>
  <div id="map-grid">
    <map-geolocation-information
      :locationData="locationData"
      class="map-geo-info"
    />
    <map-view :coordinates="coordinates" class="map-view" />
  </div>
</template>

<script>
import MapServices from "@/services/MapServices.js";

export default {
  name: "MapGrid",
  props: {
    ipAddress: {
      type: String,
    },
  },
  data() {
    return {
      locationData: {},
      coordinates: { lat: 37, lng: -122 },
    };
  },
  mounted() {
    this.getIpGeolocatedData();
  },
  watch: {
    ipAddress(newValue, oldValue) {
      if (newValue !== oldValue) this.getIpGeolocatedData();
    },
  },
  components: {
    MapView: () => import("@/components/Layout/Map/MapView.vue"),
    MapGeolocationInformation: () =>
      import("@/components/Layout/Map/MapGeolocationInformation.vue"),
  },
  methods: {
    async getIpGeolocatedData() {
      try {
        const resp = await MapServices.getIpGeolocationData(this.ipAddress);
        let location = { ...resp.data.location };
        location.isp = resp.data.isp;
        location.ip = this.ipAddress;

        this.setLocationData(location);
        this.setCoordinates(location);
      } catch (err) {
        console.error(err);
      }
    },
    setLocationData({ country, region, city, postalCode, timezone, isp, ip }) {
      this.locationData = {
        country,
        region,
        city,
        postalCode,
        timezone,
        isp,
        ip,
      };
    },
    setCoordinates({ lat, lng }) {
      this.coordinates = { lat, lng };
    },
  },
};
</script>

<style scoped src="@/assets/styles/Layout/Map/MapGrid.css"></style>
