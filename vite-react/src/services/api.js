import axios from "axios";

const instance = axios.create({
  baseURL: `https://fakestoreapi.com/`,
});

export default {
  all_products: () =>
    instance({
      method: `GET`,
      url: `products`,
    }),
  getProducts: (id) =>
    instance({
      method: `GET`,
      url: `products/${id}`,
    }),
};
