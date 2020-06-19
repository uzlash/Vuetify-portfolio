<template>
  <section class="experience" id="experience">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-h3">
        WHERE I'VE BEEN
      </h2>
      <v-row>
        <v-timeline>
          <v-timeline-item
            v-for="(exp, index) in experience"
            :key="index"
            color="orange"
            large
          >
            <template v-slot:opposite>
              <span> {{ exp.year }} </span>
            </template>
            <v-card class="elevation-2 white grey darken-4">
              <v-card-title
                class="headline text-h6 font-weight-light orange--text"
                >{{ exp.title }}</v-card-title
              >
              <v-card-text class="body-1 white--text font-weight-light">
                {{ exp.content }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    experience: [
      {
        title: "Gamma Group LLC",
        content:
          "At Gamma Group (GG2), i was employed as a remote software engineer who architected and developed the company's ecommerce platform and maintained the platform by working on bug fixes and implementation of new features.",
        year: "2020"
      },
      {
        title: "Greysoft Tech",
        content:
          "At Greysoft Technologies, i was employed as a front end developer and my roles included architecting and determining structure of web pages, developing features to enhance user experience, and optimizing web pages for performance and accessibility.",
        year: "2019"
      },
      {
        title: "Kaduna ICT HUB",
        content:
          "At kaduna ICT Hub, i enrolled into the 6 months click on kaduna digital skills programme which is essentially an intensive full stack web development bootcamp funded by the World Bank and Kaduna State Government in partnership with Rockerfeller Foundation, IBM, Andela and Natview.",
        year: "2018"
      }
    ]
  })
};
</script>

<style></style>
