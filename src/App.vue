<template>
  <v-app>
    <v-app-bar v-if="currentRoute !== '/login'">
      <v-img class="mx-2" :src="logo" max-height="40" max-width="40" contain></v-img>
      <v-app-bar-title>Manage Surveys</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn variant="text" @click="goList">Surveys List </v-btn>
        <v-btn variant="text" @click="goAdd">Add Album </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import logo from "./assets/oc-logo-white.png";
export default {
  name: "App",
  data: () => ({
    logo,
    currentRoute: ""
  }),
  methods: {
    goAdd() {
      this.$router.push({ name: "add" });
    },
    goList() {
      this.$router.push({ name: "albums" });
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentRoute = this.$route.path;
      }
    );
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

html {
  font-family: "Montserrat", sans-serif !important;
}

:root {
  --colorBlack: #161515;
  --lightBlack: #202020;
  --colorWhite: #ffff;
  --colorLightGrey: #d6d1d19c;
  --lightGrey: #dbd7d7;
  --boxShadow: 0px 10px 25px rgba(0, 0, 0, 0.177);
}

body {
  font-family: "Montserrat", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form {
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  margin-top: 15px;
  padding: 20px 20px;
  box-shadow: var(--boxShadow);
}

.checkbox {
  width: max-content;
  height: 50px;
}

.highlight__text {
  color: rgb(144, 144, 187);
}
</style>