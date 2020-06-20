<template>
  <section class="home" id="home">
    <v-row
      class="fill-height text-right pa-md-5 pa-3 mx-0 align-end justify-end"
    >
      <div class="home--elements">
        <h2 class="text-sm-h3 font-weight-thin">USMAN MURTALA</h2>
        <h1 class="text-sm-h2 font-weight-thin orange--text">
          FRONT END DEVELOPER
        </h1>
        <p class="text-h6 font-weight-thin hidden-sm-and-down">
          "A user interface is like a joke, if you have to explain it, it's not
          that good." -- Martin Leblanc
        </p>
      </div>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<script>
export default {
  name: "Home",

  data: () => ({})
};
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/hero.png");
  background-size: cover;
}
</style>
