import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,
    children: [
      {
        path: "accueil",
        component: HomeComponent,
      },
      {
        path: "ajouter-product",
        component: AddProductComponent,
      },
      {
        path: "detail/:id",
        component: DetailComponent,
      },
      {
        path: "",
        redirectTo: "accueil",
        pathMatch: "full",
      },
      { path: "**", redirectTo: "accueil", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
