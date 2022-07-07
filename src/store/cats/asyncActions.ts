import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Cats} from "./catsSlice";

const instance = axios.create({
    headers: {'x-api-key': '4236d024-f1a2-4af7-a6c3-5fade29b72cc'}
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
        return data;
    },
);