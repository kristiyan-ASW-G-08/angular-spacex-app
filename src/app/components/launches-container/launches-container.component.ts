import { Component, OnInit } from "@angular/core";
import Launch from "src/app/models/Launch";
import { LaunchService } from "src/app/services/launch-service/launch.service";

@Component({
  selector: "app-launches-container",
  templateUrl: "./launches-container.component.html"
})
export class LaunchesContainerComponent implements OnInit {
  launches: Launch[];
  pastLaunches: Launch[];
  successfulLaunches: Launch[];
  failedLaunches: Launch[];
  constructor(private launchService: LaunchService) {}

  async ngOnInit() {
    const launches = await this.launchService.getLaunches();
    this.successfulLaunches = launches.filter(
      ({ launch_success }) => launch_success
    );
    this.failedLaunches = launches.filter(
      ({ launch_success }) => !launch_success
    );
    this.pastLaunches = launches.filter(({ upcoming }) => !upcoming);
  }
}
