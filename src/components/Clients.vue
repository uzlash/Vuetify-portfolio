<template>
  <section class="clients" id="clients">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-md-h3 text-sm-h4">
        WHAT MY CLIENTS SAY
      </h2>
      <v-row>
        <v-col
          class="col-md-4 col-sm-12"
          v-for="comment in comments"
          :key="comment.client"
        >
          <v-row>
            <v-icon large class="orange--text">mdi-format-quote-open</v-icon>
          </v-row>
          <v-card outlined>
            <v-card-text>
              <blockquote class="blockquote">
                {{ comment.comment }}
              </blockquote>
            </v-card-text>
          </v-card>

          <v-row justify="end">
            <v-icon large class="orange--text">mdi-format-quote-close</v-icon>
          </v-row>
          <v-row justify="end" class="pr-2">
            <h4 class="text-h6 font-weight-thin orange--text">
              {{ comment.client }} |
            </h4>
            <span class="subheading font-weight-light">{{
              comment.company
            }}</span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    comments: [
      {
        client: "Harvey Pinkney",
        comment:
          "Usman delivered good work on this project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were very strong. He was able to think on his feet and quickly developed workarounds when necessary. I will definitely have additional jobs for him in the future.",
        company: "Street Prayers"
      },
      {
        client: "Nick Mabee",
        comment:
          "Usman did a quick and fantastic job with my Wordpress contract. He was clear and concise in his communication, asked questions I hadn't thought about to improve project flow, and completed the project ahead of schedule and on budget. I will definitely be using Usman's services again!",
        company: "Mad Cap"
      },
      {
        client: "Fredreca King",
        comment: "Outstanding job, ninjaneer.",
        company: "GG2"
      }
    ]
  })
};
</script>
