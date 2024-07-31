import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { IsValidateService } from "../../services/is-validate.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrl: "./detail.component.scss",
})
export class DetailComponent implements OnInit {
  idProduct: any;
  product: Product = new Product();
  categories: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private isValidateService: IsValidateService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.idProduct = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProductById();
    this.getAllCategory();
  }

  getProductById() {
    this.productService
      .getProduitsById(this.idProduct)
      .then((response: any) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  getAllCategory() {
    this.productService
      .getAllCategory()
      .then((response: any) => {
        this.categories = response.data;
        this.spinner.hide();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  getItemCat(event: any) {
    this.product.category = event.target.value;
  }

  onUpdateProduct() {
    if (this.isValidateService.isFormValid(this.product)) {
      this.spinner.show();
      this.productService
        .updateProductById(this.idProduct, this.product)
        .then((rep: any) => {
          console.log(rep);
          this.spinner.hide();
          this.toastr.success("Succès !", `Update Ok`);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      this.toastr.error("Error !", `Remplir tous les champs`);
    }
  }
}
