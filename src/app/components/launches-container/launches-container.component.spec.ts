import { render, wait } from "@testing-library/angular";
import { LaunchesContainerComponent } from "./launches-container.component";
import Launch from "src/app/models/Launch";
import { LaunchService } from "src/app/services/launch-service/launch.service";
import { LaunchCardComponent } from "../launch-card/launch-card.component";

jest.mock("@angular/common/http");

describe("LaunchesContainerComponent", () => {
  const launches = [
    {
      flight_number: 1,
      mission_name: "mockMisson",
      launch_site: {
        site_id: 1,
        site_name: "NotSure",
        site_name_long: "NotSureLong"
      },
      upcoming: true,
      details: "SomeDetails",
      links: {
        mission_patch: "mission_patch"
      }
    },
    {
      flight_number: 1,
      mission_name: "mockMisson",
      launch_success: false,
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
    }
  ];
  const LaunchServiceMock = {
    getLaunches: jest.fn(() => launches)
  };
  it("should render", async () => {
    const { getByRole } = await render(LaunchesContainerComponent, {
      declarations: [LaunchCardComponent],
      providers: [{ provide: LaunchService, useValue: LaunchServiceMock }]
    });

    await wait(() => {
      expect(LaunchServiceMock.getLaunches).toHaveBeenCalledTimes(1);
      //@ts-ignore
      expect(LaunchServiceMock.getLaunches).toHaveReturnedWith(launches);
    });
  });
});
