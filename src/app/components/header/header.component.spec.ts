import { render } from "@testing-library/angular";
import { HeaderComponent } from "./header.component";
import { routes } from "src/app/app-routing.module";
import { LaunchesContainerComponent } from "../launches-container/launches-container.component";
import { AppComponent } from "src/app/app.component";
import { LaunchCardComponent } from "../launch-card/launch-card.component";
import { HomeComponent } from "../home/home.component";

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
  it("should render", async () => {
    const { getByTestId, click } = await render(HeaderComponent, {
      declarations: [
        AppComponent,
        LaunchesContainerComponent,
        LaunchCardComponent,
        HeaderComponent,
        HomeComponent
      ],
      routes
    });
    const mobileMenuButton = getByTestId("mobile-menu-button");
    const mobileMenu = getByTestId("mobile-menu");

    expect(mobileMenuButton.classList).not.toContain("is-active");
    expect(mobileMenu.classList).not.toContain("is-active");
    click(mobileMenuButton);

    const activeMenuButton = getByTestId("mobile-menu-button");
    const activeMobileMenu = getByTestId("mobile-menu-button");

    expect(activeMenuButton.classList).toContain("is-active");
    expect(activeMobileMenu.classList).toContain("is-active");
  });
});
