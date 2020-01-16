import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "src/app/components/home/home.component";

import { LaunchesContainerComponent } from "src/app/components/launches-container/launches-container.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "launches", component: LaunchesContainerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
