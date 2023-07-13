import { atom, selector } from "recoil";
import axios from "axios";
import { BASE_URL } from "../config/mongo";

export const allToolsAtom = selector({
  key: "allTools",
  default: [],
  get: async ({ get }) => {
    try {
      const response = await axios.get(`${BASE_URL}/mongo-tools`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
