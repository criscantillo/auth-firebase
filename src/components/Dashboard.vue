<template>
  <v-card
        class="mx-auto"
        max-width="400"
  >

  <v-container
    fluid>
      <v-row class="cont-login" v-if="user.loggedIn">
        <v-col cols="12">
          <v-alert
            color="primary"
            dark
            icon="mdi-tag-faces"
            border="left"
            prominent
          >
            Tu estás Logueado
          </v-alert>
        </v-col>
      </v-row>   

      <v-row class="cont-login" v-if="!user.loggedIn">
        <v-col cols="12">
          <v-alert
            color="warning"
            dark
            icon="mdi-close-circle"
            border="left"
            prominent
          >
            Tu No estás Logueado
          </v-alert>
        </v-col>
      </v-row>      
    </v-container>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>