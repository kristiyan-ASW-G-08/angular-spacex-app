import { Component, OnInit } from "@angular/core";
import Rocket from "src/app/models/Rocket";
import { APIService } from "src/app/services/api-service/api.service";

@Component({
  selector: "app-rockets-container",
  templateUrl: "./rockets-container.component.html"
})
export class RocketsContainerComponent implements OnInit {
  rockets: { active: Rocket[]; inactive: Rocket[] } = {
    active: [],
    inactive: []
  };
  currentRockets: Rocket[] = [];

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    const rockets = await this.apiService.get<Rocket>("rockets");
    this.rockets = {
      active: rockets.filter(({ active }) => active),
      inactive: rockets.filter(({ active }) => !active)
    };
  }
  switchRocketType(rocketType: "active" | "inactive") {
    this.currentRockets = [...this.rockets[rocketType]];
  }
}
