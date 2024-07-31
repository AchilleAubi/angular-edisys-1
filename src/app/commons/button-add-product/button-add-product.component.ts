import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-button-add-product",
  templateUrl: "./button-add-product.component.html",
  styleUrl: "./button-add-product.component.scss",
})
export class ButtonAddProductComponent {
  constructor(private router: Router) {}

  onGoToAddProduct() {
    this.router.navigate(['app/ajouter-product'])
  }
}
