<template>
  <div id="AuthUser" class="auth_user">
    <div class="container_auth_user">
      <h2>Autenticación</h2>
      <br />
      <form v-on:submit.prevent="processAuthUser">
        <div class="form-group">
          <label for="userInputUsername">Nombre de Usuario</label>
          <input
            type="text"
            class="form-control"
            id="userInputUsername"
            placeholder="Username"
            v-model="user_in.username"
          />
        </div>
        <div class="form-group">
          <label for="userInputPassword">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="userInputPassword"
            placeholder="Password"
            v-model="user_in.password"
          />
        </div>
        <br />
        <button type="submit" class="btn submit-button">Iniciar Sesion</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "UserAuth",

  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processAuthUser: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($authenticateCredentials: CredentialsInput!) {
              authenticate(credentials: $authenticateCredentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            authenticateCredentials: this.user_in,
          },
        })
        .then((result) => {
          let data = result.data.authenticate;
          data.user_id = jwt_decode(data.access)
            .user_id.toString()
            .padStart(3, "0");

          this.$emit("log-in", data, this.user_in.username);
        })
        .catch((error) => {
          alert("El usuario y/o contraseña son incorrectos");
        });
    },
  },
};
</script>

<style>
@import "../../public/assets/styles/components.css";
</style>