<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
:root {
  --dark-gray: hsl(0, 0%, 59%);
  --very-dark-gray: hsl(0, 0%, 17%);
}
html {
  box-sizing: border-box;
  margin: 0px;
  font-size: 18px;
}
body {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
.mapboxgl-ctrl {
  display: none !important;
}
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
