
import { atom, selector } from 'recoil';
import axios from 'axios';

// Create an atom to hold the fetched data
export const allToolsAtom = atom({
  key: 'allTools',
  default: selector({
    key: 'allTools/default',
    get: async () => {
      try {
        const url = 'https://data.mongodb-api.com/app/data-dcnnw/endpoint/data/v1/collections/tools';
        const apiKey = '645ba7272cb90643036a27b1';
      
        axios.get(url, {
          headers: {
            apiKey,
          },
        })
          .then((response) => {
            console.log('Data fetched successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  }),
});