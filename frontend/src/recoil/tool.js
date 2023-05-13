import { atom, selector } from "recoil";
import axios from "axios";
import { BASE_URL } from "../config/mongo";

export const allToolsAtom = selector({
  key: "allTools",
  default: [],
  get: async ({ get }) => {
    try {
<<<<<<< HEAD
      const response = await axios.get(`${BASE_URL}/mongo-tools`);
=======
      let response = await axios.get("http://localhost:5000/mongo-tools");
>>>>>>> 95ad6f14d9f9e72a720240dcf82c0774649accdc
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
