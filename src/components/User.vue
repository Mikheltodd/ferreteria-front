<template>
  <div id="User">
    <div class="card text-center">
      <div class="card-header">Ferretería</div>
      <div class="card-body">
        <h3 class="card-title">¡Bienvenido!</h3>
        <p class="card-text">
          Hola, <span>{{ username }}</span>
          <br />
          ¿qué podemos hacer por usted?
        </p>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="submit"
            class="btn submit-button"
            v-on:click="createproduct"
          >
            Crear
          </button>
          <button
            type="submit"
            class="btn submit-button"
            v-on:click="queryproduct"
          >
            Consultar
          </button>
          <button
            type="submit"
            class="btn submit-button"
            v-on:click="deleteproduct"
          >
            Eliminar
          </button>
          <button
            type="submit"
            class="btn submit-button"
            v-on:click="transaction"
          >
            Transacción
          </button>
        </div>
      </div>
      <div class="card-footer">
        {{ getNow() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",

  data: function () {
    return {
      username: "none",
    };
  },

  created: function () {
    this.username = this.$route.params.username;
  },

  methods: {
    getNow: function () {
      const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Augostp",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const current = new Date();
      const time =
        current.getHours() +
        ":" +
        (current.getMinutes() < 10 ? "0" : "") +
        current.getMinutes();
      const dateTime =
        "Son las " +
        time +
        " del " +
        current.getDate() +
        " de " +
        monthNames[current.getMonth()] +
        " del " +
        current.getFullYear();

      return dateTime;
    },

    queryproduct: function () {
      this.$router.push({
        name: "queryproduct",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    deleteproduct: function () {
      this.$router.push({
        name: "deleteproduct",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    createproduct: function () {
      this.$router.push({
        name: "createproduct",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    transaction: function () {
      this.$router.push({
        name: "transaction",
        params: { username: localStorage.getItem("current_username") },
      });
    },
  },
};
</script>


<style>
@import "../../public/assets/styles/components.css";
</style>