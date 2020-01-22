import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";
import { LaunchesContainerComponent } from "src/app/components/launches-container/launches-container.component";
import { RocketsContainerComponent } from "./components/rockets-container/rockets-container.component";
import { HistoryContainerComponent } from "./components/history-container/history-container.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "launches", component: LaunchesContainerComponent },
  { path: "rockets", component: RocketsContainerComponent },
  { path: "history", component: HistoryContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
