<template>
  <section class="portfolio" id="portfolio">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-h3">
        WHAT I'VE DONE
      </h2>

      <v-carousel height="650" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(project, index) in project_detail"
          :key="index"
        >
          <v-sheet color="transparent" height="100%">
            <v-row justify="center" class="my-5">
              <div class="font-weight-light">
                <h3 class="text-h6 orange--text">{{ project.project_name }}</h3>
                <h4 class="body-1">{{ project.project_skill }}</h4>
              </div>
            </v-row>
            <v-row justify="center">
              <v-col cols="6" class="pa-5">
                <v-row class="pa-5">
                  <h3 class="mb-2 text-h6 orange--text">Project Details</h3>
                  <p class="body-1 font-weight-light">
                    {{ project.project_desc }}
                  </p>
                </v-row>
                <v-row class="px-5">
                  <v-col cols="12">
                    <h3 class="text-h6 orange--text">Project info</h3>
                  </v-col>
                  <v-col cols="12">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="orange" large>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="body-1 font-weight-light">
                          Client Name:
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="mr-5 body-1 font-weight-light"
                        >
                          {{ project.client_name }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="12">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="orange" large>mdi-calendar</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="body-1 font-weight-light">
                          Project Date:
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="mr-5 body-1 font-weight-light"
                        >
                          {{ project.project_date }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="12">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="orange" large>mdi-link</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="body-1 font-weight-light">
                          Live Preview
                        </v-list-item-title>
                        <v-list-item-subtitle class="mr-5">
                          <v-btn
                            outlined
                            target="_blank"
                            :href="project.project_url"
                            color="orange"
                            dark
                            >Click Me</v-btn
                          >
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" class="pa-5">
                <v-img
                  :src="project.project_image"
                  height="300"
                  width="600"
                  class="mt-5"
                ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-row wrap>
        <v-col cols="12"> </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    project_detail: [
      {
        project_name: "Omnifood",
        project_skill: "HTML5, CSS3, SCSS & JQuery",
        project_desc:
          "Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. so let us take care of that, we're really good at it, we promise!",
        project_date: "25-Jun-2018",
        client_name: "Personal project",
        project_image: "https://i.imgur.com/ZJzAI0A.png",
        project_url: "https://omnifood11.netlify.app/"
      },
      {
        project_name: "Natours",
        project_skill: "HTML5, CSS3, CSS Animations & SCSS",
        project_desc:
          "Hello we are natours, your fast track to booking tours all around the world to see mother nature. Our tours can be for individuals or groups in rocky, marsh or snowy mountains.",
        project_date: "15-May-2020",
        client_name: "Personal project",
        project_image: "https://i.imgur.com/EUakYMy.png",
        project_url: "https://natours11.netlify.app/"
      },
      {
        project_name: "Project Manager",
        project_skill: "Vue.js, Vue Router, Vuetify & Firebase",
        project_desc:
          "Project manager is a vuetify dashboard that allows you to organize the projects you are currently working on, tracking the project status and managing team members.",
        project_date: "3-Jun-2020",
        client_name: "Personal project",
        project_image: "https://i.imgur.com/P8AYfDJ.png",
        project_url: "https://project-manager-f6797.web.app/"
      },
      {
        project_name: "Crwn clothing store",
        project_skill: "React, React Router & Firebase",
        project_desc:
          "Crown clothing store is a full stack ecommerce site that allows you to shop for clothing from different categories ranging from men, women, kids and so on.",
        project_date: "19-Nov-2019",
        client_name: "Personal project",
        project_image: "https://i.imgur.com/0060DSJ.png",
        project_url: "https://crwn1.netlify.app/"
      },
      {
        project_name: "Smart Brain",
        project_skill: "React, React Router, Clarifai API",
        project_desc:
          "Smart brain is a full stack react app that uses the clarifai API's image recognition to detect faces in images using.",
        project_date: "26-Aug-2019",
        client_name: "Personal project",
        project_image: "https://i.imgur.com/vm5zU8E.png",
        project_url: "https://smartbrain1.netlify.app/"
      }
    ]
  })
};
</script>
