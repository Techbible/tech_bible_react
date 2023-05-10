
import { atom, selector } from 'recoil';
import axios from 'axios';

// Create an atom to hold the fetched data
export const allToolsAtom = atom({
  key: 'allTools',
  default: selector({
    key: 'allTools/default',
    get: async () => {
      try {
        const response = await axios.get('http://localhost:5000/mongo-tools');
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  }),
});