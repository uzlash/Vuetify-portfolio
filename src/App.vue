<template>
  <v-app>
    <Header />
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
    Home
  },

  data: () => ({
    //
  })
};
</script>
