<template>
  <section class="clients" id="clients">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-h3 text-center">
        LET'S TALK
      </h2>
      <v-row justify="center">
        <v-col cols="4">
          <h3 class="font-weight-light orange--text text-h5 text-center">
            What can i do for you?
          </h3>
          <p class="body-1 font-weight-light text-center">
            Do you have a project you want to work with me on? Send me a message
            and i will get back to you within 1-2 business days.
          </p>
        </v-col>
        <v-col cols="2" align="center">
          <v-avatar size="100">
            <img src="https://i.imgur.com/58RzHdm.jpg" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-text-field
                  label="Name"
                  prepend-icon="mdi-account"
                  v-model="name"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-email"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  prepend-icon="mdi-lead-pencil"
                  v-model="message"
                  :rules="inputRules"
                ></v-textarea>

                <v-btn block class="orange" @click="submit" :loading="loading"
                  >Send</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: ""
  })
};
</script>
