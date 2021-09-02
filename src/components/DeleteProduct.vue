<template>
  <div id="DeleteProduct" class="auth_user">
    <div class="container_auth_user">
      <div class="form-group">
        <label for="productId">Código de Producto A Eliminar</label>
        <input
          type="text"
          class="form-control"
          id="productId"
          placeholder="Product ID"
          v-model="inputProductId"
        />
        <br />
        <button type="submit" class="btn submit-button" v-on:click="deleteProducts">
          Eliminar Producto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "DeleteProduct",

  data: function () {
    return {
      deleteProduct: {
          id: " - ",

      }

    };
  },

  // created: function () {
  //   this.inputProductId = this.$route.params.inputProductId;
  // },

  methods: {
    deleteProducts: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
          mutation Mutation($deleteProductUserId: String!, $deleteProductId: String!) {
  deleteProduct(userId: $deleteProductUserId, id: $deleteProductId)
}
          `,
          variables: {
            deleteProductUserId: localStorage.getItem("user_id"),
            deleteProductId:"1"
          },
        })
        .then((result) => {
          alert("Producto eliminado")
        })
        .catch((error) => {
            alert("Producto no encontrado para eliminar");
        });
    },
  },
};
</script>



<style>
@import "../../public/assets/styles/components.css";
</style>


