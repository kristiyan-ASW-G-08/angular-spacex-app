import { render } from "@testing-library/angular";
import { TabsComponent } from "./tabs.component";
describe("TabsComponent", () => {
  afterEach(jest.clearAllMocks);
  const tabClick = jest.fn();
  const tabs = {
    tab1: [],
    tab2: [],
    tab3: []
  };
  //@ts-ignore
  it.each(Object.keys(tabs))("", async key => {
    const { queryByText, click } = await render(TabsComponent, {
      componentProperties: {
        tabs,
        tabClick: {
          emit: tabClick
        } as any
      }
    });

    const tab = queryByText(key);

    expect(tab).toBeTruthy();

    click(tab);

    expect(tabClick).toHaveBeenCalledTimes(1);
  });
});
