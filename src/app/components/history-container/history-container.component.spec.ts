import { render, wait } from "@testing-library/angular";
import { HistoryContainerComponent } from "./rockets-container.component";
import { APIService } from "src/app/services/api-service/api.service";
import { HistoryCardComponent } from "../history-card/history-card.component";

jest.mock("@angular/common/http");

describe("HistoryContainerComponent", () => {
  const stories = [
    {
      id: 1,
      title: "Falcon 1 Makes History",
      event_date_utc: "2008-09-28T23:15:00Z",
      event_date_unix: 1222643700,
      details:
        "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
      links: {
        reddit: null,
        article: "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
        wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
      }
    };
  ];
  const APIServiceMock = {
    get: jest.fn(() => stories)
  };
  it("should render", async () => {
    const { getByRole } = await render(HistoryContainerComponent, {
      declarations: [HistoryCardComponent],
      providers: [{ provide: APIService, useValue: APIServiceMock }]
    });

    await wait(() => {
      expect(APIServiceMock.get).toHaveBeenCalledTimes(1);
      //@ts-ignore
      expect(APIServiceMock.get).toHaveReturnedWith(stories);
    });
  });
});
