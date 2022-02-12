<template>
  <div id="map-view"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import MapServices from "@/services/MapServices.js";
export default {
  name: "MapView",
  props: {
    coordinates: {
      type: Object,
    },
  },
  mounted() {
    this.createMapView();
  },
  watch: {
    coordinates() {
      MapServices.flyToPosition(this.coordinates);
    },
  },
  methods: {
    async createMapView() {
      MapServices.createMapLayer(this.coordinates);
    },
  },
};
</script>

<style scoped src="@/assets/styles/Layout/Map/MapView.css"></style>
