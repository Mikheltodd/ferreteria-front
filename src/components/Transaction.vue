<template>
  <div id="Transaction" class="auth_user">
    <div class="container_auth_user">
      <h3>Realizar Transacción</h3>
      <form v-on:submit.prevent="createTransaccion">
        <div class="form-group row">
          <label for="inputID" class="col-form-label">ID del Producto: </label>
          <div class="col">
            <input
              type="text"
              class="col form-control"
              id="inputID"
              placeholder="Product ID"
              v-model="createTransacctionTransaction.productId"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputQuantity" class="col-form-label">Cantidad: </label>
          <div class="col">
            <input
              type="number"
              class="form-control"
              id="inputQuantity"
              placeholder="Cantidad"
              v-model="createTransacctionTransaction.quantity"
            />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label">Tipo de Transacción</legend>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="radio_sell"
                  value="sell"
                  checked
                  v-model="createTransacctionTransaction.type"
                />
                <label class="form-check-label" for="radio_sell">
                  Vender
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="radio_buy"
                  value="buy"
                  v-model="createTransacctionTransaction.type"
                />
                <label class="form-check-label" for="radio_buy">
                  Comprar
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" class="btn submit-button">
          Realizar Transacción
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Transacction",

  data: function () {
    return {
      createTransacctionTransaction: {
        productId: null,
        type: "sell",
        quantity: null,
      },
    };
  },

  methods: {
    createTransaccion: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation (
              $createTransacctionUserId: String!
              $createTransacctionTransaction: TransacctionInput!
            ) {
              createTransacction(
                userId: $createTransacctionUserId
                transaction: $createTransacctionTransaction
              ) {
                id
                productId
                type
                quantity
                date
              }
            }
          `,
          variables: {
            createTransacctionUserId: localStorage.getItem("user_id"),
            createTransacctionTransaction: this.createTransacctionTransaction,
          },
        })
        .then((result) => {
          alert("Transacción Exitosa");
        })
        .catch((error) => {
          alert("La transacción no pudo ser procesada");
        });
      this.$forceUpdate();
      this.$router.go();
    },
  },
};
</script>

<style>
@import "../../public/assets/styles/components.css";
</style>