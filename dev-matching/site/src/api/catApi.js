const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async url => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = response.json();
            return data;
        } else {
            const errorData = response.json();
            throw errorData;
        }
    } catch (e) {
        throw {
            message: e.message,
            status: e.status
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
            const res = Array.prototype.concat.apply([], responses);

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
