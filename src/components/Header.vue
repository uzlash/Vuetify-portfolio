<template>
  <nav>
    <v-navigation-drawer
      app
      class="grey darken-4"
      v-model="drawer"
      width="350px"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <p
            class="white--text mt-3 text-center text-h1 font-weight-bold orange--text"
          >
            UM
          </p>
        </v-flex>
        <v-flex class="my-3 text-h4 font-weight-thin">
          Usman Murtala
        </v-flex>
        <v-flex class="my-3 text-h5 font-weight-thin">
          Front End Developer
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group class="my-5">
          <v-list-item v-for="(item, i) in navItems" :key="i">
            <v-list-item-content>
              <v-list-item-title
                class="white--text text-center text-h6 font-weight-thin"
              >
                {{ item }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-row wrap>
        <v-col class="mt-5 text-center" md4 v-for="(icon, i) in icons" :key="i">
          <v-icon>{{ icon }}</v-icon>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        "About Me",
        "Services",
        "Experience",
        "Skills and Education",
        "Portfolio",
        "Clients",
        "Contact"
      ],
      icons: ["mdi-twitter", "mdi-linkedin", "mdi-github"]
    };
  }
};
</script>

<style></style>
