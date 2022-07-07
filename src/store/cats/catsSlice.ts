import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {fetchCats} from "./asyncActions";
import {getFavoritesFromLocalStorage} from "../../utils/getFavoritesFromLocalStorage";

interface catsState {
    items: Cats[],
    actuallyItems: object[],
    offset: Offset,
    status: string,
    page: number,
    favoriteCats: Cats[]
}

export type Cats = {
    url: string,
    id: string,
    width: number,
    height: number,
    breeds: []
}

type Offset = {
    start: number,
    end: number,
    offset: number
}

const initialState: catsState = {
    items: [],
    actuallyItems: [],
    favoriteCats: getFavoritesFromLocalStorage() || [],
    page: 0,
    offset: {
        start: 0,
        end: 20,
        offset: 20
    },
    status: 'loading'
} as catsState

const catsState = createSlice({
    name: 'cats',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        });

        builder.addCase(fetchCats.fulfilled, (state, action) => {
            state.items = action.payload;
            state.actuallyItems = [...state.actuallyItems, ...action.payload.slice(state.offset.start, state.offset.end)];
            state.status = 'success';
        });

        builder.addCase(fetchCats.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
    reducers: {
        setOffset(state) {
            if (state.offset.end <= 80) {
                state.offset.end = state.offset.end + state.offset.offset;
                state.status = 'success';
            } else {
                state.page = state.page + 1
                state.offset.start = 0;
                state.offset.end = 20;
                window.scroll(0, 0);
                state.actuallyItems = [];
                state.status = 'new page';
            }
        },
        setActuallyItems(state) {
            if (state.status !== 'new page') {
                state.actuallyItems = state.items.slice(state.offset.start, state.offset.end);
            }
        },
        addFavoriteCate(state, action) {
            if (!state.favoriteCats.find(item => item.id === action.payload)) {
                const newItem = state.items.find(item => item.id === action.payload);
                state.favoriteCats = [...state.favoriteCats, newItem];
            } else {
                state.favoriteCats = state.favoriteCats.filter(item => item.id !== action.payload);
            }
        },
        resetCats(state) {
            state.actuallyItems = [];
            state.items = [];
        },
    },
})

export const {setOffset, setActuallyItems, addFavoriteCate, resetCats} = catsState.actions
export default catsState.reducer