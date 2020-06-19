<template>
  <v-app>
    <Header />
    <!-- <v-main class="grey darken-3"> -->
    <v-main>
      <Home />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

export default {
  name: "App",

  components: {
    Header,
    Home,
    About,
    Services,
    Experience,
    Skills,
    Portfolio
  },

  data: () => ({
    //
  })
};
</script>
