<template>
  <div id="Product" class="auth_user">
    <div class="container_auth_user">
      <label>Código de Producto: </label>
      <span> {{ getProduct.id }} </span>
      <br />
      <label>Producto: </label>
      <span> {{ getProduct.name }} </span>
      <br />
      <label>Cantidad: </label>
      <span> {{ getProduct.quantity }} </span>
      <br />
      <label>Precio: </label>
      <span>${{ getProduct.price }} </span>
    </div>
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
        id: " - ",
        name: " - ",
        quantity: " - ",
        price: " - ",
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
};
</script>


<style>
@import "../../public/assets/styles/components.css";
</style>