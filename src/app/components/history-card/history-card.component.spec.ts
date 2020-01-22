import { render } from "@testing-library/angular";
import { HistoryCardComponent } from "./history-card.component";
import Story from "src/app/models/Story";

const story = {
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
const storyMock = (story as unknown) as Story;
describe("HistoryCardComponent", () => {
  it("should render", async () => {
    const container = await render(HistoryCardComponent, {
      componentProperties: { story: storyMock }
    });

    //@ts-ignore
    expect(container).toMatchSnapshot();
  });
});
