<template>
  <div>
    <div class="geo-wrapper">
      <h2>{{ title.toUpperCase() }}</h2>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayGeoInfo",
  props: ["title"],
};
</script>

<style
  scoped
  src="@/assets/styles/Layout/Geolocation/DisplayGeoInfo.css"
></style>
