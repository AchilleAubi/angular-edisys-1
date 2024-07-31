import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class IsValidateService {
  constructor() {}

  isFormValid(product: Product): boolean {
    return (
      !!product.title &&
      !!product.category &&
      !!product.image &&
      !!product.description &&
      product.price !== null &&
      product.rating.rate !== null &&
      product.rating.count !== null
    );
  }
}
