<template>
  <section class="home">
    <div class="home--elements">
      <h2 class="text-h2 font-weight-thin">USMAN MURTALA</h2>
      <h1 class="text-h1 font-weight-thin orange--text">FRONT END DEVELOPER</h1>
    </div>
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

.home--elements {
  position: absolute;
  right: 5px;
  bottom: 5px;
  text-align: right;
}
</style>
