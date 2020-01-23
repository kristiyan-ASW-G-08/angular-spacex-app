import { Component, OnInit } from "@angular/core";
import Story from "src/app/models/Story";
import { APIService } from "src/app/services/api-service/api.service";

@Component({
  selector: "app-history-container",
  templateUrl: "./history-container.component.html"
})
export class HistoryContainerComponent implements OnInit {
  stories: Story[] = [];
  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.stories = await this.apiService.get<Story>("history");
  }
}
