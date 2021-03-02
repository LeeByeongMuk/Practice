import SearchingSection from './components/SearchingSection.js';

import api from './api/catApi.js';
import { getItem, setItem } from './util/sessionStorage.js';

export default class App {
    constructor($target) {
        const keywords = getItem('keywords');
        const data = getItem('data');

        const searchingSection = new SearchingSection({
            $target,
            keywords,
            onSearch: async keyword => {
                const response = await api.fetchCats(keyword);

                if (response.isError) {
                    setItem('data', response.data);
                } else {
                    console.log(response.data);
                    // error.setState(response.data);
                }
            },
            onRandom: async () => {
                const response = await api.fetchRandomCats();
                if(!response.isError){
                    setItem('data', response.data);
                } else {
                    // error.setState(response.data);
                }
            }
        });

        const loading = new Loading({
            $target
        });

        const error = new Error({
            $target
        });

    }
}
