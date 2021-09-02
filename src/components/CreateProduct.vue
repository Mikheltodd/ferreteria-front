<template>
  <div id="Products" class="auth_user">
    <div class="container_auth_user">
      <h3>Crear Producto</h3>
      <form>
        <div class="form-group row">
          <label for="inputID" class="col-form-label">ID</label>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="inputID"
              placeholder="Product ID"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputName" class="col-form-label">Nombre</label>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputQuantity" class="col-form-label">Cantidad</label>
          <div class="col-auto">
            <input
              type="number"
              class="form-control"
              id="inputQuantity"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPrice" class="col-form-label">Precio</label>
          <div class="col-auto">
            <input
              type="number"
              class="form-control"
              id="inputPrice"
              placeholder="Price"
              v-model="inputProductPrice"
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn submit-button"
          v-on:click="createNewProduct"
        >
          Crear
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CreateProduct",

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