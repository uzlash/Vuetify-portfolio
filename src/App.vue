<template>
  <v-app>
    <Header />
    <v-main class="grey darken-3">
      <Home />
      <About />
      <Services />
      <Experience />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";

export default {
  name: "App",

  components: {
    Header,
    Home,
    About,
    Services,
    Experience
  },

  data: () => ({
    //
  })
};
</script>
