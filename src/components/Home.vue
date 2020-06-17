<template>
  <section class="home">
    <v-row
      class="fill-height text-right pa-md-5 pa-3 mx-0 align-end justify-end"
    >
      <div class="home--elements">
        <h2 class="text-h2 font-weight-thin">USMAN MURTALA</h2>
        <h1 class="text-h1 font-weight-thin orange--text">
          FRONT END DEVELOPER
        </h1>
        <p class="text-h5 font-weight-thin">
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

/* .home--elements {
  position: absolute;
  right: 5em;
  top: 35em;
  text-align: right;
  } */
</style>
