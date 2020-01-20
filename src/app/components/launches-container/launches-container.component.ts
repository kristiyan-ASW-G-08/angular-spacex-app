import { Component, OnInit } from "@angular/core";
import Launch from "src/app/models/Launch";
import { APIService } from "src/app/services/api-service/api.service";

@Component({
  selector: "app-launches-container",
  templateUrl: "./launches-container.component.html"
})
export class LaunchesContainerComponent implements OnInit {
  upcomingLaunches: Launch[];
  successfulLaunches: Launch[];
  failedLaunches: Launch[];
  launches: {
    upcoming: Launch[];
    successful: Launch[];
    failed: Launch[];
  } = { upcoming: [], successful: [], failed: [] };
  currentLaunches: Launch[] = [];
  launchType: "upcoming" | "successful" | "failed" = "upcoming";
  constructor(private apiService: APIService) {}

  async ngOnInit() {
    const launches = await this.apiService.getLaunches();
    this.launches = {
      upcoming: launches.filter(({ upcoming }) => upcoming),
      successful: launches.filter(({ launch_success }) => launch_success),
      failed: launches.filter(({ launch_success }) => !launch_success)
    };

    this.currentLaunches = [...this.launches.upcoming];
  }
  switchLaunchType(launchType: "upcoming" | "successful" | "failed") {
    this.launchType = launchType;
    this.currentLaunches = [...this.launches[launchType]];
  }
}
