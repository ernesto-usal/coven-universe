<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./style/screen-size";
@import "./style/vars";

:root {
  --purple: #b79afc;
  --red: #ff809b;
  --green: #8bea63;
  --blue: #35d1e7;
  --darkblue: #0f1f64;
}

@font-face {
  font-family: "exocet";
  src: url("./assets/exocet.ttf");
}
@font-face {
  font-family: "codesaver";
  src: url("./assets/codesaver.otf");
}

* {
  box-sizing: border-box;
}

html {
  overflow: auto !important;
  overflow-x: hidden !important;
}

body {
  margin: 0;
  background: transparent url("./assets/background.svg") no-repeat fixed center;
  background-size: cover;
  min-width: 320px !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
  background: rgba(0, 0, 0, 0);
  border: 1px solid #000;
  padding: 8px 16px;
  color: #000;
  margin-top: 0;
  box-shadow: 3px 4px 0 0 rgba(0, 0, 0, 1);
  width: 12rem;
  height: 3rem;
  background: white;
  transition: all 0.2s ease;
  font-family: codesaver;

  a {
    text-decoration: none;
    color: #000 !important;
  }

  &:hover,
  &:focus {
    background: #fff032 !important;
  }
  &:disabled {
    background: #e1e1e1;
    &:hover,
    &:focus {
      background: #e1e1e1 !important;
    }
  }
  &:active {
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 1);
  }
}

.button-purpure {
  &:hover {
    background: $purple !important;
  }
}

.button-small {
  font-size: 12px;
  padding: 5px 15px;
  width: 120px;
  height: 40px;
  margin-bottom: 3px;
}

.modal-button {
  margin-top: 40px !important;
}

h1 {
  font-family: exocet;
  text-align: center;
}

p {
  font-family: codesaver;
}

.v-dialog:not(.v-dialog--fullscreen) {
  @include respond-to(md) {
    margin: 15px;
  }
}

.my-container {
  width: 1240px;
  padding: 0 15px;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @include respond-to(lg) {
    width: 991px;
  }
  @include respond-to(md) {
    width: 750px;
  }
  @include respond-to(sm) {
    width: 100%;
    padding: 0 10px;
  }
}

.v-card__text {
  font-family: "codesaver";
}

.dialog {
  height: auto !important;
}

.thank-dialog {
  text-align: center;
  max-width: 500px;
  .dialog {
    padding: 50px;
    img {
      margin: auto;
    }
    .v-card__text {
      margin: 20px 0 50px;
      padding: 0 !important;
    }
  }
}

.mdi-menu-down::before {
  content: "";
  background-image: url(./assets/triangle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 14px;
  height: 17px;
}

.ps__thumb-y {
  background: $purple !important;
}

.errorPage {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 300px;
  font-size: 50px;
  font-family: "codesaver";
}
</style>
