import { render } from "@testing-library/angular";
import { RocketCardComponent } from "./rocket-card.component";
import Rocket from "src/app/models/Rocket";

const rocket = {
  country: "United States",
  company: "SpaceX",
  height: {
    meters: 70,
    feet: 229.6
  },
  diameter: {
    meters: 3.7,
    feet: 12
  },
  mass: {
    kg: 549054,
    lb: 1207920
  }
};
const rocketMock = (rocket as unknown) as Rocket;
describe("RocketCardComponent", () => {
  it("should render", async () => {
    const { queryByText, queryAllByAltText } = await render(
      RocketCardComponent,
      {
        componentProperties: { rocket: rocketMock }
      }
    );
    const country = queryByText(`Country: ${rocket.country}`);
    const company = queryByText(`Company: ${rocket.company}`);
    const height = queryAllByAltText(
      ` Height: ${rocket.height.meters} meters /
      ${rocket.height.feet} feet`
    );
    const diameter = queryAllByAltText(
      ` Diameter: ${rocket.diameter.meters} meters /
      ${rocket.diameter.feet} feet`
    );
    const mass = queryAllByAltText(
      ` Mass: ${rocket.mass.kg} kg /
      ${rocket.mass.lb} lb`
    );

    expect(country).toBeTruthy();
    expect(company).toBeTruthy();
    expect(height).toBeTruthy();
    expect(diameter).toBeTruthy();
    expect(mass).toBeTruthy();
  });
});
