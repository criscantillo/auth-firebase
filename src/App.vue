<template>
  <v-app id="yonko-app">
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      height="50"
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Bienvenido a Yonko</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>
        <template v-if="user.loggedIn">
          <v-list-item>
            <v-list-item-avatar>
              <v-img v-if="user.data.photoURL" :src="user.data.photoURL"></v-img>
              <v-img v-if="!user.data.photoURL" src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{user.data.displayName}}</v-list-item-title>
              <v-list-item-subtitle>{{user.data.email}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-btn icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>
        </template>

        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/dashboard">Dashboard</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <template v-if="!user.loggedIn">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="login">Login</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="registro">Registro</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item v-if="user.loggedIn" link @click="signOut">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
.v-list-item a{
  text-decoration: none;
  color:inherit !important;
}
</style>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: 'App',

  components: {
    //Navbar,
  },

  data: () => ({
    drawer: null
  }),

  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },

  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({name: "/"});
        });
    }
  }
};
</script>
