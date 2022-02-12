<template>
  <div class="input-wrapper">
    <input type="text" v-model="ip" @keyup.enter="searchIpAddress" />
    <div class="search-btn" @click="searchIpAddress">
      <img src="../../assets/icons/icon-arrow.svg" alt="Search IP" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchIpAddress",
  emits: ["search-ip-address"],
  data() {
    return {
      ip: null,
    };
  },
  methods: {
    searchIpAddress() {
      this.$emit("search-ip-address", this.ip);
    },
  },
};
</script>

<style scoped src="@/assets/styles/Activities/SearchIpAddress.css"></style>
