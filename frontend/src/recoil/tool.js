import { atom, selector } from "recoil";
import axios from "axios";

export const allToolsAtom = selector({
  key: "allTools",
  default: [],
  get: async ({ get }) => {
    try {
      let response = await axios.get("http://localhost:5000/mongo-tools");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
