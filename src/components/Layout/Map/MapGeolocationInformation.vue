<template>
  <div class="geo-info">

    <display-geo-info :title="'IP Address'" class="display-geo-info ip">
      {{ getIP }}</display-geo-info
    >
    <display-geo-info :title="'Location'" class="display-geo-info location">
      {{ getLocation }}</display-geo-info
    >
    <display-geo-info :title="'Timezone'" class="display-geo-info timezone">
      {{ getTimezone }}</display-geo-info
    >
    <display-geo-info :title="'ISP'" class="display-geo-info isp">
      {{ getISP }}</display-geo-info
    >
  </div>
</template>

<script>


export default {
  props: {
    locationData: {
      type: Object,
    },
  },
  name: "MapGeolocationInformation",
  components: {
    DisplayGeoInfo: () =>
      import("@/components/Layout/Geolocation/DisplayGeoInfo.vue"),
  },
  computed: {
    getLocation() {
      return this.locationData.region || this.locationData.city || this.locationData.postalCode ? `${this.locationData.region}, ${this.locationData.city}, ${this.locationData.postalCode}` : ``;
    },
    getTimezone() {
      return this.locationData.timezone ? `UTC ${this.locationData.timezone}` : ``;
    },
    getIP() {
      return this.locationData.ip ? `${this.locationData.ip}` : ``;
    },
    getISP() {
      return this.locationData.isp ? `${this.locationData.isp}` : ``;
    },
  },
};
</script>

<style
  scoped
  src="@/assets/styles/Layout/Map/MapGeolocationInformation.css"
></style>
