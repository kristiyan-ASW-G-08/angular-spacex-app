import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  isActive: boolean = false;
  toggleIsActive() {
    this.isActive = !this.isActive;
  }
}
