<template>
  <div id="Products" class="auth_user">
    <div class="container_auth_user">
      <h3>Crear Producto</h3>
      <form v-on:submit.prevent="createProduct">
        <div class="form-group row">
          <label for="inputID" class="col-form-label">ID</label>
          <div class="col">
            <input
              type="text"
              class="col form-control"
              id="inputID"
              placeholder="Product ID"
              v-model="createProductProduct.id"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputName" class="col-form-label">Nombre</label>
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
              v-model="createProductProduct.name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputQuantity" class="col-form-label">Cantidad</label>
          <div class="col">
            <input
              type="number"
              class="form-control"
              id="inputQuantity"
              placeholder="Quantity"
              v-model="createProductProduct.quantity"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPrice" class="col-form-label">Precio</label>
          <div class="col">
            <input
              type="number"
              class="form-control"
              id="inputPrice"
              placeholder="Price"
              v-model="createProductProduct.price"
            />
          </div>
        </div>
        <button type="submit" class="btn submit-button">Crear</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CreateProduct",

  data: function () {
    return {
      createProductProduct: {
        id: null,
        name: null,
        quantity: null,
        price: null,
      },
    };
  },

  methods: {
    createProduct: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation (
              $createProductUserId: String!
              $createProductProduct: ProductInput!
            ) {
              createProduct(
                userId: $createProductUserId
                product: $createProductProduct
              ) {
                id
                name
                quantity
                price
              }
            }
          `,
          variables: {
            createProductUserId: localStorage.getItem("user_id"),
            createProductProduct: this.createProductProduct,
          },
        })
        .then((result) => {
          alert("Producto Creado Exitosamente");
        })
        .catch((error) => {
          alert("No se pudo crear el Producto");
        });
      this.$forceUpdate();
      this.$router.go();
    },
  },
};
</script>


<style>
</style>