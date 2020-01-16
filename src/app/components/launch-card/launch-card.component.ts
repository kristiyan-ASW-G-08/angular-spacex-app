import { Component, OnInit, Input } from "@angular/core";
import Launch from "src/app/models/Launch";

@Component({
  selector: "app-launch-card",
  templateUrl: "./launch-card.component.html",
})
export class LaunchCardComponent implements OnInit {
  @Input() launch: Launch;
  constructor() {}

  ngOnInit() {}
}
