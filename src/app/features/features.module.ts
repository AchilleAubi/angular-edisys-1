import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeaturesComponent } from "./features.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { HomeComponent } from "./home/home.component";
import { CommonsModule } from "../commons/commons.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [FeaturesComponent, HomeComponent, AddProductComponent, DetailComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CommonsModule,
    FormsModule,
    NgxSpinnerModule,
  ],
})
export class FeaturesModule {}
