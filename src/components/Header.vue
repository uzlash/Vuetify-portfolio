<template>
  <nav>
    <v-app-bar app color="transparent" collapse outlined>
      <v-app-bar-nav-icon
        large
        @click="drawer = !drawer"
        class="orange--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      class="grey darken-4"
      width="280px"
      v-model="drawer"
    >
      <v-layout column align-center>
        <v-flex class="mt-4">
          <p
            class="white--text mt-3 text-center text-h2 font-weight-bold orange--text"
          >
            UM
          </p>
        </v-flex>
        <v-flex class="my-2 text-md-h4 text-sm-h5 font-weight-thin">
          Usman Murtala
        </v-flex>
        <v-flex class="my-2 text-md-h5 text-sm-h6 font-weight-thin">
          Front End Developer
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group class="my-5">
          <v-list-item v-for="(item, i) in navItems" :key="i" :href="item.href">
            <v-list-item-content>
              <v-list-item-title
                class="white--text text-center text-md-h6 text-sm-body-1 font-weight-thin"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-row wrap>
        <v-col class="text-center" md4 v-for="(icon, i) in icons" :key="i">
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
      drawer: true,
      navItems: [
        { title: "About Me", href: "#about" },
        { title: "Services", href: "#services" },
        { title: "Experience", href: "#experience" },
        { title: "Skills and Education", href: "#skills" },
        { title: "Portfolio", href: "#portfolio" },
        { title: "Clients", href: "#clients" },
        { title: "Contact", href: "#contact" }
      ],
      icons: ["mdi-twitter", "mdi-linkedin", "mdi-github"]
    };
  }
};
</script>

<style></style>
