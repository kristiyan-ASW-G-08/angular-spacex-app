import { Component, Input, OnInit } from "@angular/core";

interface Tab {
  name: string;
  event: Function;
}
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[] = [];
  @Input() event: Function;
  currentTab: Tab;
  constructor() {}
  ngOnInit() {
    this.currentTab = this.tabs[0];
  }
  switchTabs(tabName: string) {
    this.currentTab = this.tabs.find(({ name }) => name === tabName);
    this.currentTab.event(this.currentTab.name);
  }
}
