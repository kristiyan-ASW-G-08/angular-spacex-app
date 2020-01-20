import { Component, Input } from "@angular/core";
import Rocket from "src/app/models/Rocket";

@Component({
  selector: "app-rocket-card",
  templateUrl: "./rocket-card.component.html"
})
export class RocketCardComponent {
  @Input() rocket: Rocket;
  constructor() {}
}
