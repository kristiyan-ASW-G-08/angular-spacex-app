import { render, wait } from "@testing-library/angular";
import { RocketsContainerComponent } from "./rockets-container.component";
import { APIService } from "src/app/services/api-service/api.service";
import { RocketCardComponent } from "../rocket-card/rocket-card.component";

jest.mock("@angular/common/http");

describe("RocketsContainerComponent", () => {
  const rockets = [
    {
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
    }
  ];
  const APIServiceMock = {
    get: jest.fn(() => rockets)
  };
  it("should render", async () => {
    const { getByRole } = await render(RocketsContainerComponent, {
      declarations: [RocketCardComponent],
      providers: [{ provide: APIService, useValue: APIServiceMock }]
    });

    await wait(() => {
      expect(APIServiceMock.get).toHaveBeenCalledTimes(1);
      //@ts-ignore
      expect(APIServiceMock.get).toHaveReturnedWith(rockets);
    });
  });
});
