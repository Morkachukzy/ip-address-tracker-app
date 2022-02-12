<template>
  <div id="home">
    <the-header>IP Address Tracker</the-header>
    <search-ip-address @search-ip-address="searchIpAddress" />
    <map-grid :ipAddress="ipAddress" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    TheHeader: () => import("@/components/Layout/TheHeader.vue"),
    SearchIpAddress: () =>
      import("@/components/Activities/SearchIpAddress.vue"),
    MapGrid: () => import("@/components/Layout/Map/MapGrid.vue"),
  },
  data() {
    return {
      ipAddress: "8.8.8.8",
    };
  },
  
  methods: {
    searchIpAddress(ip) {
      if (ip) {
        this.ipAddress = ip;
      }
    },
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/views/Home.css"></style>
