import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { PubSubService } from "../../services/pub-sub.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productsInitial: Product[] = [];
  categories: string[] = [];
  activeCategory: string = "All";
  private subscription: Subscription = new Subscription();
  keyWord: string = "";

  constructor(
    private productService: ProductService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private pubSubService: PubSubService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getAllCategory();
    this.subscription = this.pubSubService.events$.subscribe((event) => {
      this.keyWord = event.message;
      if (this.keyWord === "") {
        this.products = this.productsInitial;
        console.log("Event message is empty");
      } else {
        this.filteredProducts();
      }
    });
  }

  getAllProducts() {
    this.spinner.show();
    this.activeCategory = "All";
    this.productService
      .getAllProduct()
      .then((response: any) => {
        this.products = response.data;
        this.productsInitial = this.products;
        this.spinner.hide();
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
        this.getAllProducts();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  getProductByCat(category: string) {
    this.activeCategory = category;
    this.spinner.show();
    this.productService
      .getProduitsByCat(category)
      .then((response: any) => {
        this.products = response.data;
        this.spinner.hide();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  onGoInDetails(id: number) {
    this.router.navigate([`app/detail/${id}`]);
  }

  filteredProducts(): Product[] {
    this.products = this.productsInitial;
    this.products = this.products.filter((product) => {
      return (
        this.keyWord === "" ||
        product.title.toLowerCase().includes(this.keyWord.toLowerCase())
      );
    });
    return this.products;
  }
}
