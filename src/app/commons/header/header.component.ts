import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { PubSubService } from "../../services/pub-sub.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {

  constructor(
    private toastr: ToastrService,
    private pubSubService: PubSubService
  ) {}

  onShowToastWarn() {
    this.toastr.warning("Attention !", `Fonctionnalité non disponible`);
  }

  publishEvent(event: any): void {
    const publish = { message: event.target.value };
    this.pubSubService.publish(publish);
  }
}
