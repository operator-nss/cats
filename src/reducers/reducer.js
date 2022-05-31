const initialState = {
    cats: [],
    catsLoadingStatus: 'idle',
    favoriteCats: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATS_FETCHING':
            return {
                ...state,
                catsLoadingStatus: 'loading'
            }
        case 'CATS_FETCHED':
            return {
                ...state,
                cats: action.payload,
                // action.payload.filter(item => item.element === state.activeFilter),
                catsLoadingStatus: 'idle'
            }
        case 'CATS_FAVORITE_FETCHING':
            return {
                state,
                favoriteCats: [...state.favoriteCats]
            }
        case 'CATS_FETCHING_ERROR':
            return {
                ...state,
                catsLoadingStatus: 'error'
            }
        case 'CATS_FAVORITE_FETCHED':
            return {
                ...state,
                catsLoadingStatus: 'idle',
                favoriteCats: [...state.favoriteCats, action.payload]
            }
        case 'CAT_CREATED':
            // Формируем новый массив
            let newCreatedCatsList = [...state.favoriteCats, action.payload];
            return {
                ...state,
                favoriteCats: newCreatedCatsList,
                // filteredHeroes: state.activeFilter === 'all' ?
                //     newCreatedCatsList :
                //     newCreatedCatsList.filter(item => item.element === state.activeFilter)
            }
        case 'CAT_DELETED':
            return {
                ...state,
                favoriteCats: state.favoriteCats.filter(item => item.id !== action.payload),

            }
        default:
            return state
    }
}

export default reducer;