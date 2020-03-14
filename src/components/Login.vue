<template>
    <v-card
        class="mx-auto"
        max-width="400"
    >
        <div class="title"><h2>Login Yonko</h2></div>
    
        <form @submit.prevent="submit">
            <v-container
                id="input-usage"
                fluid>
                <v-row class="cont-login">
                    <v-col cols="12">
                        <v-text-field
                            v-model="form.email"
                            label="Correo"
                            required
                            prepend-icon="mdi-gmail"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="form.password"
                            label="Contraseña"
                            required
                            type="password"
                            prepend-icon="mdi-security"
                        ></v-text-field>

                        <div class="forgot-pass">Olvidaste tu contraseña</div>
                    </v-col>

                    <v-col cols="12" class="btn-login">
                        <v-btn type="submit" color="blue darken-1" dark large width="100%">Login</v-btn>
                    </v-col>

                    <v-col cols="12" class="btn-social">
                        <v-btn class="mx-2" fab dark small color="blue lighten-2"
                        @click="twitterLogin">
                            <v-icon dark>mdi-twitter</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab dark small color="indigo darken-1"
                        @click="facebookLogin">
                            <v-icon dark>mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab dark small color="red lighten-1"
                        @click="googleLogin">
                            <v-icon dark>mdi-google</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="link-reg">
                        <router-link to="registro">Quiero Registrarme</router-link>
                    </v-col>
                </v-row>
            </v-container>
        </form>

        <v-alert v-if="error" type="error">
            {{error}}
        </v-alert>
    </v-card>
</template>

<style>
.cont-login{
    padding: 0px 30px 0px 30px;
}

.title{
    text-align: center;
    padding-top:40px;
    padding-bottom: 15px;
}

.btn-login{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 30px;
}

.btn-social{
    text-align: center;
    padding: 5px;
    margin-bottom:60px;
}

.forgot-pass{
    text-align: right;
    font-size: 0.9rem;
}

.link-reg{
    text-align: center;
}

.link-reg a{
    text-decoration: none;
}
</style>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
            console.log(data);
            this.error = '';
            this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }, 

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((data) => {
            console.log(data);
            this.$router.replace({ name: "Dashboard" });
        }).catch((err) => {
            this.error = err.message;
        });
    },

    twitterLogin() {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then((data) => {
            console.log(data);
            this.$router.replace({ name: "Dashboard" });
        }).catch((err) => {
            this.error = err.message;
        });
    },

    facebookLogin() {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((data) => {
            console.log(data);
            this.$router.replace({ name: "Dashboard" });
        }).catch((err) => {
            this.error = err.message;
        });
    }
  }
};
</script>