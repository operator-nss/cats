import Header from "./components/Header/Header";
import './app.css'
import React, {lazy, Suspense} from 'react';
import CatsList from "./components/catsList/CatsList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Favorites = lazy(() => import("./components/Favorites/Favorites"));
const NoMatch = lazy(() => import("./components/404/404"));

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path='/' element={<CatsList />} />
                        <Route path='/favorites' element={<Favorites />} />

                        <Route path='*' element={<NoMatch />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
