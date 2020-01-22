import { Component, Input } from "@angular/core";
import Story from "src/app/models/Story";

@Component({
  selector: "app-history-card",
  templateUrl: "./history-card.component.html"
})
export class HistoryCardComponent {
  @Input() story: Story;
}
