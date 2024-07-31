import { Injectable } from "@angular/core";
import axios from "axios";
import { environments } from "../../environments/environments";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  getAllProduct() {
    return axios.get(`${environments.BASE_URL}`);
  }

  getAllCategory() {
    return axios.get(`${environments.BASE_URL}/categories`);
  }

  getProduitsByCat(category: any) {
    return axios.get(`${environments.BASE_URL}/category/${category}`);
  }

  getProduitsById(id: number) {
    return axios.get(`${environments.BASE_URL}/${id}`);
  }

  updateProductById(id: number, product: Product) {
    return axios.put(`${environments.BASE_URL}/${id}`, product)
  }

  addNewProduct(product: Product) {
    return axios.post(`${environments.BASE_URL}`, product);
  }
}
