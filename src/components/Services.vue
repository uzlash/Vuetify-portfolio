<template>
  <section class="services" id="services">
    <v-container>
      <v-row>
        <v-col class="col-md-8 col-sm-12">
          <v-expansion-panels popout v-model="panel" multiple>
            <v-expansion-panel
              v-for="(ability, i) in abilities"
              :key="i"
              class="grey darken-4"
            >
              <v-expansion-panel-header class="text-h5 font-weight-light">{{
                ability.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="text-h6 font-weight-light">
                {{ ability.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Services",
  data: () => ({
    panel: [0],
    abilities: [
      {
        title: "Accessible",
        content:
          "We live in a world where virtually anyone can operate a device (personal computers or smart phones), therefore it is imperative that sites/apps are fully accessible for people with disabilities."
      },
      {
        title: "Beautiful",
        content:
          "I love to build amazing User interfaces therefore my development process is faster and highly effective when working with beautiful and highly intuitive designs."
      },
      {
        title: "Performant",
        content:
          "Speed is extremely important! it could lead to conversions, increased revenues and an overall amazing user experience, i implement optimization techniques on sites/apps as much as i can."
      },
      {
        title: "Responsive",
        content:
          "There are alot of devices with different screen sizes, pixel densities and aspect ratios, it is my job as a front end developer to ensure that your sites/apps look good on those devices."
      }
    ]
  })
};
</script>
