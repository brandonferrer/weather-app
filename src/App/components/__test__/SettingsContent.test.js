import React from "react";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import Button from "@material-ui/core/Button";
import SettingsContent from "../SettingsContent";
import * as AppContext from "../../../App/context";

configure({ adapter: new ReactSixteenAdapter() });

describe("SettingsContent", () => {
  it("should have disabled button if searchData is null", () => {
    const mockedContextValues = {
      searchData: null,
    };

    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => mockedContextValues);

    const wrapper = shallow(<SettingsContent />);
    expect(wrapper.find(Button).props().disabled).toBe(true);
  });

  it("should have enabled button if searchData is set", () => {
    const mockedContextValues = {
      searchData: {
        formattedAddress: "555 Foobar St, San Diego, CA 92123",
        name: "Foo Bar",
        lat: -55.77,
        lng: 34.555,
      },
    };

    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => mockedContextValues);

    const wrapper = shallow(<SettingsContent />);
    expect(wrapper.find(Button).props().disabled).toBe(false);
  });
});
