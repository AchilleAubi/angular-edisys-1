import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { IsValidateService } from "../../services/is-validate.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrl: "./add-product.component.scss",
})
export class AddProductComponent implements OnInit {
  categories: string[] = [];
  product: Product = new Product();
  rating: number = 1;
  count: number = 1;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private isValidateService: IsValidateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService
      .getAllCategory()
      .then((response: any) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  getItemCat(event: any) {
    this.product.category = event.target.value;
  }

  onAddProduct() {
    this.product.rating.rate = this.rating;
    this.product.rating.count = this.count;

    if (this.isValidateService.isFormValid(this.product)) {
      this.spinner.show();
      this.productService.addNewProduct(this.product).then((rep: any) => {
        console.log(rep);
        this.spinner.hide();
        this.toastr.success("Succès !", `Add new product Ok`);
        this.router.navigate(["app/accueil"]);
      });
    } else {
      this.toastr.error("Error !", `Remplir tous les champs`);
    }
  }
}
