<template>
  <div id="Products" class="auth_user">
    <div class="container_auth_user">
      <div class="form-group">
        <label for="productId">Código de Producto</label>
        <input
          type="text"
          class="form-control"
          id="productId"
          placeholder="Product ID"
          v-model="inputProductId"
        />
        <br />
        <button type="submit" class="btn submit-button" v-on:click="product">
          Consultar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "QueryProduct",

  data: function () {
    return {};
  },

  created: function () {
    this.inputProductId = this.$route.params.inputProductId;
  },

  methods: {
    product: function () {
      this.$router.push({
        name: "product",
        params: { productId: this.inputProductId },
      });
    },
  },
};
</script>


<style>
@import "../../public/assets/styles/components.css";
</style>