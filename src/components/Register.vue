<template>
    <v-card
        class="mx-auto"
        max-width="400"
    >
        <div class="title"><h2>Crear Cuenta Yonko</h2></div>
    
        <form @submit.prevent="submit">
            <v-container
                id="input-usage"
                fluid>
                <v-row class="cont-login">
                    <v-col cols="12">
                        <v-text-field
                            v-model="form.name"
                            label="Nombre"
                            required
                            prepend-icon="mdi-security"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="form.email"
                            label="Correo"
                            required
                            prepend-icon="mdi-security"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="form.password"
                            label="Contraseña"
                            required
                            type="password"
                            prepend-icon="mdi-security"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="btn-login">
                        <v-btn type="submit" color="blue darken-1" dark large width="100%">Registrar</v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="link-reg">
                        <router-link to="login">Quiero Loguearme</router-link>
                    </v-col>
                </v-row>
            </v-container>
        </form>

        <v-alert v-if="error" type="error">
            {{error}}
        </v-alert>
    </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
                this.error = '';
            });
        })
        .catch(err => {
            console.log(err);
            this.error = err.message;
        });
    }
  }
};
</script>