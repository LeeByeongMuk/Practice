const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async url => {
    let controller;

    try {
        if (controller) {
            controller.abort();
            controller = null;

            return;
        }

        controller = new AbortController();

        const response = await fetch(url, {
            signal: controller.signal
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw errorData;
        }
    } catch (e) {
        if (e.name === 'AbortError') {
            throw {
                message: 'AbortError',
                status: 'FetchAbort'
            }
        } else {
            throw {
                message: e.message,
                status: e.status
            }
        }
    }
};

const api = {
    fetchCats: async keyword => {
        try {
            const breeds = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
            const requests = breeds.map(async breed => {
                return await request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`);
            });
            const responses = await Promise.all(requests);
            const result = Array.prototype.concat.apply([], responses);

            return {
                isError: false,
                data: result
            }
        } catch (e) {
            return {
                isError: true,
                data: e
            }
        }

    },
    fetchRandomCats: async () => {
        try {
            const res = await request(`${API_ENDPOINT}/images/search?limit=20`);

            return {
                isError: false,
                data: res
            }
        } catch (e) {
            return {
                isError: true,
                data: e
            }
        }
    }
}

export default api;
