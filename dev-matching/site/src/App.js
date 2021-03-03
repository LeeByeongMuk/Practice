import SearchingSection from './components/SearchingSection.js'; // 검색창
import ResultsSection from './components/ResultsSection.js'; // 곰색 결과 영역
import DetailModal from './components/DetailModal.js'; // 모달 영역
import Loading from './components/Loading.js'; // 검색시 로딩 영역
import Error from './components/Error.js'; // 검색시 로딩 영역

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
                loading.toggleSpinner();

                const response = await api.fetchCats(keyword);

                if (!response.isError) {
                    setItem('data', response.data);
                    resultsSection.setState(response.data);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            },
            onRandom: async () => {
                loading.toggleSpinner();

                const response = await api.fetchRandomCats();

                if(!response.isError){
                    setItem('data', response.data);
                    resultsSection.setState(response.data);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            }
        });

        const resultsSection = new ResultsSection({
            $target,
            data,
            onClick: data => {
                detailModal.setState(data);
            },
            onScroll: async () => {
                loading.toggleSpinner();

                const response = await api.fetchRandomCats();

                if (!response.isError) {
                    const oldData = getItem('data');
                    const newData = oldData.concat(response.data);

                    setItem('data', newData);
                    resultsSection.setState(newData);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }

            }
        });

        const detailModal = new DetailModal({
            $target
        });

        const loading = new Loading({
            $target
        });

        const error = new Error({
            $target
        });

    }
}
