import { Component, OnInit } from "@angular/core";
import Launch from "src/app/models/Launch";
import { APIService } from "src/app/services/api-service/api.service";

interface Tab {
  name: string;
  event: Function;
}
@Component({
  selector: "app-launches-container",
  templateUrl: "./launches-container.component.html"
})
export class LaunchesContainerComponent implements OnInit {
  upcomingLaunches: Launch[];
  successfulLaunches: Launch[];
  failedLaunches: Launch[];
  launches: {
    successful: Launch[];
    failed: Launch[];
    upcoming: Launch[];
  } = { upcoming: [], successful: [], failed: [] };
  currentLaunches: Launch[] = [];
  launchType: "upcoming" | "successful" | "failed" = "upcoming";

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    const launches = await this.apiService.get<Launch>("launches");
    this.launches = {
      successful: launches.filter(({ launch_success }) => launch_success),
      failed: launches.filter(({ launch_success }) => !launch_success),
      upcoming: launches.filter(({ upcoming }) => upcoming)
    };

    this.currentLaunches = [...this.launches.upcoming];
  }
  switchLaunchType(launchType: "upcoming" | "successful" | "failed") {
    this.launchType = launchType;
    this.currentLaunches = [...this.launches[launchType]];
  }
}
