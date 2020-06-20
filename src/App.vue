<template>
  <v-app>
    <Header />
    <!-- <v-main class="grey darken-3"> -->
    <v-main class="pt-0">
      <Home />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />
      <Clients />
      <Contact />
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
import Clients from "./components/Clients";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Header,
    Home,
    About,
    Services,
    Experience,
    Skills,
    Portfolio,
    Clients,
    Contact
  },

  data: () => ({
    //
  })
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #bdbdbd;
}
::-webkit-scrollbar-thumb {
  background: #616161;
}
</style>
