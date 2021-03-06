import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LaunchesContainerComponent } from "./components/launches-container/launches-container.component";
import { LaunchCardComponent } from "./components/launch-card/launch-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { RocketsContainerComponent } from './components/rockets-container/rockets-container.component';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistoryContainerComponent } from './components/history-container/history-container.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesContainerComponent,
    LaunchCardComponent,
    HeaderComponent,
    HomeComponent,
    RocketsContainerComponent,
    RocketCardComponent,
    HistoryCardComponent,
    HistoryContainerComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
