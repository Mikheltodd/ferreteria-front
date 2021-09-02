import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import User from "./components/User";
import UserAuth from "./components/UserAuth";
import Product from "./components/Product";
import QueryProduct from "./components/QueryProduct";
import CreateProduct from "./components/CreateProduct";
import Transaction from "./components/Transaction.vue";

import DeleteProduct from "./components/DeleteProduct";
const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/user/auth",
    name: "user_auth",
    component: UserAuth,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
  },

  {
    path: "/products/:productId",
    name: "product",
    component: Product,
  },
  {
    path: "/products/",
    name: "queryproduct",
    component: QueryProduct,
  },
  {
    path: "/products/create",
    name: "createproduct",
    component: CreateProduct,
  },
  {
    path: "/products/delete/:productId",
    name: "DeleteProduct",
    component: DeleteProduct,
  },
  {
    path: "/transactions/new",
    name: "transaction",
    component: Transaction,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
