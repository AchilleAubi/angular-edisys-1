import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ButtonAddProductComponent } from "./button-add-product/button-add-product.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, ButtonAddProductComponent, FooterComponent],
  exports: [HeaderComponent, ButtonAddProductComponent, FooterComponent],
  imports: [CommonModule],
})
export class CommonsModule {}
