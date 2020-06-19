<template>
  <section class="about" id="about">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-h3">WHO AM I?</h2>
      <v-row wrap class="text-h6 font-weight-thin">
        <v-col md4>
          <p class="font-weight-light">
            I am a front end developer with 2 years of experience who is adept
            at creating client side apps that are accessible, performant,
            responsive and scalable. My attention to detail, keen eye for good
            designs, and problem solving skills gives me the ability to
            implement amazing UI (User Interface) which in turn leads to a
            superb UX (User Experience).
          </p>
        </v-col>
        <v-col md4 class="py-auto">
          <v-row>
            <h4 class="mx-4">Location:</h4>
            <span>Kaduna, Nigeria</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Email:</h4>
            <span>uzlash16@gmail.com</span>
          </v-row>
          <v-row>
            <h4 class="mx-4">Phone:</h4>
            <span>+2348069558390</span>
          </v-row>
        </v-col>
        <v-col md4 class="text-right text-uppercase text-no-wrap">
          <h2 class="font-weight-light">Front End Developer</h2>
          <span class="orange--text font-weight-light">Usman Murtala</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col md8>
          <h2
            class="my-5 font-weight-light orange--text text-h3 text-uppercase"
          >
            What i can create for you is a site that is:
          </h2>
        </v-col>
        <v-col md4>
          <v-img
            src="../assets/1348005528.svg"
            height="400px"
            width="400px"
            contain
            class="image__filter--orange"
          ></v-img>
          <div class="text-center">
            <v-sheet color="orange--text grey darken-4 body-1"
              >"Usman, you are a software engineer and also a ninja, a
              ninjaneer" - Fredreca King, CEO GG2</v-sheet
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
.image__filter--orange {
  filter: invert(50%) sepia(150%) saturate(2500%) hue-rotate(10deg)
    brightness(100%) contrast(100%);
  margin-top: -200px;
}
</style>
