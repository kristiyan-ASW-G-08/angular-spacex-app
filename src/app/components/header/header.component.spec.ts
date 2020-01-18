import { render, fireEvent } from "@testing-library/angular";
import { HeaderComponent } from "./header.component";
import { routes } from "src/app/app-routing.module";
import { LaunchesContainerComponent } from "../launches-container/launches-container.component";
import { AppComponent } from "src/app/app.component";
import { LaunchCardComponent } from "../launch-card/launch-card.component";
import { HomeComponent } from "../home/home.component";
import { Router } from "@angular/router";

describe("HeaderComponent", () => {
  it("should render", async () => {
    const { getByText, click } = await render(HeaderComponent, {
      declarations: [
        AppComponent,
        LaunchesContainerComponent,
        LaunchCardComponent,
        HeaderComponent,
        HomeComponent
      ],
      routes
    });
    const launchesLink = getByText("Launches");
    click(launchesLink);
  });
});
