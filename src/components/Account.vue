<template>
  <div id="Account">
    <div class="container">
      <h2>
        Vendedor <span>{{ username }}</span>
      </h2>
      <h2>
        Cantidad: <span>${{ getProduct.quantity }} </span>
      </h2>
      <h2>
        Precio:
        <span>${{ getProduct.price }} </span>
      </h2>
      <h2>
        Nombre del prducto:
        <span>${{ getProduct.name }} </span>
      </h2>
      <input type="text" placeholder="Id Usuario Destino" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Account",

  data: function () {
    return {
      // username: "none",

      getProduct: {
        id: "null",
        name: "null",
        quantity: "null",
        price: "null",
      },
    };
  },

  created: function () {
    this.username = this.$route.params.username;
  },

  apollo: {
    getProduct: {
      query: gql`
        query Query($getProductUserId: String!, $getProductId: String!) {
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

          getProductId: "001",
        };
      },
    },
  },
};
</script>


<style>
@import "../../public/assets/styles/components.css";
</style>