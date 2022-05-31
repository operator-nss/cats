import {logDOM} from "@testing-library/react";

export const catsFetching = () => {
    return {
        type: 'CATS_FETCHING'
    }
}

export const catsFetched = (cats) => {
    return {
        type: 'CATS_FETCHED',
        payload: cats
    }
}

export const catsFavoriteFetching = () => {
    return {
        type: 'CATS_FAVORITE_FETCHING',
    }
}

export const catsFavoriteFetched = (favoriteCats) => {
    return {
        type: 'CATS_FAVORITE_FETCHED',
        payload: favoriteCats
    }
}

export const catsFetchingError = () => {
    return {
        type: 'CATS_FETCHING_ERROR'
    }
}

export const catCreated = (cat) => {
    return {
        type: 'CAT_CREATED',
        payload: cat
    }
}

export const catDeleted = (id) => {
    return {
        type: 'CAT_DELETED',
        payload: id
    }
}

export const fetchCats = (request) => (dispatch) => {
    dispatch(catsFetching());
    request("http://localhost:3001/cats")
        .then(data => dispatch(catsFavoriteFetched(data)))
        .catch(() => dispatch(catsFetchingError))
    // debugger
}