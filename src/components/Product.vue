<template>
  <div id="Product" class="auth_user" style="flex-direction: column">
    <div class="card text-center">
      <div class="card-header">Detalles del Producto</div>
      <div class="card-body">
        <h5 class="card-title">{{ getProduct.name }}</h5>
        <p class="card-text">
          <br />
          Cantidad: <span> {{ getProduct.quantity }} </span>
          <br />
          Precio: $ <span> {{ getProduct.price }} </span>
          <br />
        </p>
      </div>
      <div class="card-footer text-muted">
        Código: <span> {{ getProduct.id }} </span>
      </div>
    </div>
    <br />
    <button type="submit" class="btn submit-button" v-on:click="queryproduct">
      Consultar <br />
      Otro Producto
    </button>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Product",

  data: function () {
    return {
      productId: "none",
      getProduct: {
        id: null,
        name: null,
        quantity: null,
        price: null,
      },
    };
  },

  created: function () {
    this.productId = this.$route.params.productId;
  },

  apollo: {
    getProduct: {
      query: gql`
        query ($getProductUserId: String!, $getProductId: String!) {
          getProduct(userId: $getProductUserId, id: $getProductId) {
            id
            name
            quantity
            price
          }
        }
      `,
      variables() {
        return {
          getProductUserId: localStorage.getItem("user_id"),
          getProductId: this.productId,
        };
      },
    },
  },

  methods: {
    queryproduct: function () {
      this.$router.push({
        name: "queryproduct",
        params: { username: localStorage.getItem("current_username") },
      });
    },
  },
};
</script>


<style>
@import "../../public/assets/styles/components.css";
</style>