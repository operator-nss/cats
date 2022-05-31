import {useState, useCallback} from "react";


export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers =
    {'x-api-key': '4d252884-edba-4865-a33a-e3bae4c0ff3e', 'Content-Type': 'application/json'}) => {

        setProcess('loading');
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }


            const data = await response.json();

            return data;
        } catch (e) {
            setProcess('error');
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, [])


    return {request, clearError, process, setProcess}
}

const useCatsService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://api.thecatapi.com/v1';
    const _limit = 15;
    const _offset = 0


    const getAllCats = async (offset = _offset) => {
        const res = await request(`${_apiBase}/breeds?limit=${_limit}&page=${offset}`);
        return res.map(_transformCat);
    }

    const _transformCat = (cat) => {
        return {
            id: cat.id, thumbnail: cat.image ? cat.image.url : 'none',
        }
    }


    return {
        getAllCats, request, clearError, process, setProcess
    }
}

export default useCatsService;
