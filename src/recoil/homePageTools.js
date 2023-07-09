import { atom, selector } from "recoil";
import axios from "axios";
import { BASE_URL } from "../config/mongo";

export const homeToolsAtom = selector({
  key: "homeTools",
  default: [],
  get: async ({ get }) => {
    try {
      const response = await axios.get(`${BASE_URL}/homePageTools`);
      // const filtredTools = response.data.filter((tool) => {
      //   const toolNames = [
      //     "Bright Data",
      //     "Chatbase",
      //     "ZoomInfo",
      //     "Synthesia",
      //     "BeeFree",
      //     "AirFocus",
      //     "Brand24",
      //     "Dripify",
      //     "Firstbase",
      //     "Fiverr Business",
      //     "Landbot",
      //     "Ocoya",
      //     "Outseta",
      //     "Pensight",
      //     "PhantomBusters",
      //     "Quartile",
      //     "Skylead",
      //     "Softr",
      //     "Soon",
      //     "SurveySparrow",
      //     "Tolstoy",
      //     "Vidyard",
      //     "Webflow",
      //     "Weglot",
      //   ];

      //   return toolNames.includes(tool._id);
      // });
      // return filtredTools;
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
