import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
interface Tabs {
  [key: string]: any[];
}
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tabs = {};
  @Output() tabClick: EventEmitter<string> = new EventEmitter();
  currentTab: string;
  constructor() {}
  ngOnInit() {
    this.currentTab = Object.keys(this.tabs)[0];
  }
  onTabClick(key: string): void {
    this.currentTab = key;
    this.tabClick.emit(key);
  }
}
