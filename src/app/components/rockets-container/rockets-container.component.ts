import { Component, OnInit } from "@angular/core";
import Rocket from "src/app/models/Rocket";
import { APIService } from "src/app/services/api-service/api.service";

@Component({
  selector: "app-rockets-container",
  templateUrl: "./rockets-container.component.html"
})
export class RocketsContainerComponent implements OnInit {
  rockets: Rocket[] = [];

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.rockets = await this.apiService.get<Rocket>("rockets");
  }
}
