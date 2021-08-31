<template>
  <div id="app" class="app">
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logotype" href="#">
            <img src="../public/assets/Logo.png" alt="Logo Ferretería" />
            <h1>Ferretería</h1>
          </a>
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <a class="nav-link" v-on:click="init" v-if="is_auth">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="account" v-if="is_auth"
                >Productos</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="transacction" v-if="is_auth"
                >Transacciones</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="historial" v-if="is_auth"
                >Eliminar</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="logOut" v-if="is_auth"
                >Cerrar Sesión</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="main-component">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <footer
      class="flex-wrap justify-content-between align-items-center bg-dark"
    >
      <span class="text-white">&copy; 2021 Company, Inc</span>
    </footer>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",

  data: function () {
    return {
      is_auth: false,
    };
  },

  created: function () {
    this.updateAccessToken();
  },

  methods: {
    updateAccessToken: async function () {
      if (localStorage.getItem("refresh_token") == null) {
        this.$router.push({ name: "user_auth" });
        this.is_auth = false;
        return;
      }

      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($refreshTokenRefresh: String!) {
              refreshToken(refresh: $refreshTokenRefresh) {
                access
              }
            }
          `,
          variables: {
            refreshTokenRefresh: localStorage.getItem("refresh_token"),
          },
        })
        .then((result) => {
          localStorage.setItem("access_token", result.data.refreshToken.access);
          this.is_auth = true;
        })
        .catch((error) => {
          alert("Su sesión expiró, vuelva a iniciar sesión.");
          this.$router.push({ name: "user_auth" });
          this.is_auth = false;
          localStorage.clear();
        });
    },

    logIn: async function (data, username) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("current_username", username);

      await this.updateAccessToken();
      if (this.is_auth) this.init();
    },

    init: function () {
      this.$router.push({
        name: "user",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    account: function () {
      this.$router.push({
        name: "account",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    transacction: function () {
      this.$router.push({
        name: "transacction",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    historial: function () {
      this.$router.push({
        name: "historial",
        params: { username: localStorage.getItem("current_username") },
      });
    },
    logOut: async function () {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("current_username");

      await this.updateAccessToken();
    },
  },
};
</script>

<style>
@import "../public/assets/styles/main.css";
</style>
