import reducer from '../reducers/reducer';
import {configureStore} from "@reduxjs/toolkit";

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;