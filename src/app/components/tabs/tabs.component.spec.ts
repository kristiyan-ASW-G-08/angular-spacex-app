import { render } from "@testing-library/angular";
import { TabsComponent } from "./tabs.component";
describe("TabsComponent", () => {
  afterEach(jest.clearAllMocks);
  const tabs = [
    { name: "upcoming", event: jest.fn() },
    { name: "successful", event: jest.fn() },
    { name: "failed", event: jest.fn() }
  ];
  //@ts-ignore
  it.each(tabs)("", async ({ name, event }) => {
    const { queryByText, click } = await render(TabsComponent, {
      componentProperties: { tabs }
    });

    const tab = queryByText(name);

    expect(tab).toBeTruthy();

    click(tab);

    expect(event).toHaveBeenCalledTimes(1);
  });
});
