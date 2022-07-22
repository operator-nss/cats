import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Cats} from "./catsSlice";

const instance = axios.create({
    headers: {'x-api-key': '502907d2-91bc-470f-993c-23a45e3cb8ab'}
});

export type CatsParams = {
    pageCat: string;
}


export const fetchCats = createAsyncThunk<Cats[], CatsParams>(
    'cats/fetchCatsStatus',
    async (params) => {
        const { pageCat } = params;
        const { data } = await axios.get<Cats[]>
        (`https://api.thecatapi.com/v1/images/search?size=thumb&limit=100&page=${pageCat}`);
        // (`https://api.thecatapi.com/v1/images/search?&limit=100`);
        return data;
    },
);