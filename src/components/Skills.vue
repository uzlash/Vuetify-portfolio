<template>
  <section class="pa-5" id="skills">
    <v-container>
      <v-col col-12>
        <v-row justify="space-between">
          <v-col cols="auto">
            <h2
              class="my-5 font-weight-light orange--text text-md-h3 text-sm-h4"
            >
              WHAT I KNOW?
            </h2>
          </v-col>
          <!-- <v-col cols="4"> </v-col> -->
        </v-row>
      </v-col>
      <v-col col-12>
        <v-row justify="space-around">
          <v-col class="col-md-6 col-sm-12">
            <h3 class="text-h5 my-5 orange--text">My Skills</h3>
            <h4 class="text-h6 orange--text font-weight-light">
              Technical Skills
            </h4>
            <v-row v-for="skill in skillTech" :key="skill.title">
              <v-col cols="4" align-self="center"
                ><span class="body-1 font-weight-light ml-4">
                  {{ skill.title }}
                </span></v-col
              >
              <v-col cols="8">
                <v-rating
                  size="25"
                  v-model="skill.rating"
                  full-icon="mdi-record"
                  half-icon="mdi-record"
                  empty-icon="mdi-record"
                  color="orange"
                  background-color="grey darken-3"
                ></v-rating>
              </v-col>
            </v-row>
            <h4 class="text-h6 orange--text font-weight-light">Soft Skills</h4>
            <v-row v-for="(skill, index) in skillSoft" :key="index">
              <v-col cols="4" align-self="center"
                ><span class="body-1 font-weight-light ">{{
                  skill.title
                }}</span></v-col
              >
              <v-col cols="8">
                <v-rating
                  size="25"
                  v-model="skill.rating"
                  full-icon="mdi-record"
                  empty-icon="mdi-record"
                  color="orange"
                  background-color="grey darken-3"
                ></v-rating>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-sm-and-down">
            <h3 class="text-h5 my-5 orange--text">My Education</h3>
            <v-row>
              <v-sheet color="transparent">
                <v-row>
                  <v-sheet
                    class="mr-5"
                    tile
                    height="100px"
                    width="1px"
                    color="orange"
                  ></v-sheet>
                  <v-col pa5>
                    <v-row
                      ><span class="text-h6 font-weight-light">
                        Federal University Dutsinma
                      </span></v-row
                    >
                    <v-row wrap justify="end"
                      ><span class="text-h5 font-weight-light orange--text"
                        >B.SC Computer Science &amp; IT</span
                      ></v-row
                    >
                    <v-row class="font-weight-light" justify="end"
                      ><span>2015-2018</span></v-row
                    >
                  </v-col>
                </v-row>
              </v-sheet>
            </v-row>
            <v-row class="mt-5 hidden-sm-and-down">
              <v-col class="mt-5">
                <h3 class="text-h5 orange--text font-weight-light">
                  Skills Detail
                </h3>
                <ul v-for="skill in skillDetail" :key="skill.content">
                  <li class="body-1 font-weight-light my-2">
                    <span class="orange--text">{{ skill.title }}: </span>
                    <span>{{ skill.content }}</span>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    skillTech: [
      { title: "HTML5", rating: 4 },
      { title: "CSS3", rating: 4 },
      { title: "JavaScript", rating: 4 },
      { title: "CMS", rating: 4 },
      { title: "Vue.js", rating: 3 },
      { title: "React", rating: 3 },
      { title: "Firebase", rating: 3 },
      { title: "Node.js", rating: 2 }
    ],
    skillSoft: [
      { title: "Problem Solving", rating: 4 },
      { title: "Sharp Mind", rating: 4 },
      { title: "Adaptability", rating: 4 }
    ],
    skillDetail: [
      { title: "CSS3", content: "SCSS, Bootstrap, Materialize, Tachyons, MDB" },
      { title: "JavaScript", content: "ES5 and ES6" },
      {
        title: "Vue.js",
        content: "VueX, Vue Router, Vuetify, Quasar Framework"
      },
      {
        title: "React",
        content: "Redux, Hooks, React material UI, React bootstrap"
      },
      { title: "CMS", content: "Wordpress, Wix, Weebly, Squarespace" },
      { title: "Firebase", content: "Firebase CRUD" },
      { title: "Node.js", content: "Express.js" },
      {
        title: "Other Javascript libraries",
        content: "Axios, Particle.js, Howler.js, Paper.js"
      }
    ]
  })
};
</script>

<style></style>
