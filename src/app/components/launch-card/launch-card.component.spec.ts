import { render } from "@testing-library/angular";
import { LaunchCardComponent } from "../launch-card/launch-card.component";
import Launch from "src/app/models/Launch";

const launch = {
  flight_number: 1,
  mission_name: "mockMisson",
  launch_success: true,
  launch_site: {
    site_id: 1,
    site_name: "NotSure",
    site_name_long: "NotSureLong"
  },
  upcoming: false,
  details: "SomeDetails",
  links: {
    mission_patch: "mission_patch"
  }
};
const launchMock = (launch as unknown) as Launch;
describe("LaunchCardComponent", () => {
  it("should render", async () => {
    const { queryByText, queryAllByAltText } = await render(
      LaunchCardComponent,
      {
        componentProperties: { launch: launchMock }
      }
    );
    const missionName = queryByText(`Name: ${launch.mission_name}`);
    const launchSite = queryByText(
      `Launch site: ${launch.launch_site.site_name_long}`
    );
    const missionPatchImages = queryAllByAltText(
      `${launch.mission_name} patch`
    );
    const launchDetails = queryByText(launch.details);

    expect(missionName).toBeTruthy();
    expect(launchSite).toBeTruthy();
    expect(launchDetails).toBeTruthy();
    expect(missionPatchImages).toBeTruthy();
    //@ts-ignore
    expect(missionPatchImages).toHaveLength(2);
  });
});
