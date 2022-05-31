import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    catDeleted,
    catsFavoriteFetched, catsFavoriteFetching,
    catsFetched,
    catsFetching,
    catsFetchingError,
    fetchCats
} from "../../actions/actions";

import {useHttp} from "../../services/CatsService";
import Preloader from "../Preloader/Preloader";
import nothing from '../../assets/images/nothing.jpg';
import fullHeart from '../../assets/images/heart-d.svg';
import './favorites.css';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {logDOM} from "@testing-library/react";


const Favorites = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {catsLoadingStatus, favoriteCats} = useSelector(state => state);


    useEffect(() => {
        dispatch(fetchCats(request));
    }, []);


    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/cats/${id}`, "DELETE")
            .then(dispatch(catDeleted(id)))
            .then(dispatch(catsFavoriteFetching()))
    },[]);

    if (catsLoadingStatus === "loading") {
        return <Preloader/>;
    } else if (catsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }


    function renderCatsList(arr) {
        if (arr.length === 0) {
            return (
                <div>
                    <h5 className="text-center mt-5">Избранных котиков пока нет(</h5>
                </div>

            )
        }

        const favoriteCat = arr[0].map((item) => {
            return (
                <li className='cats__item' key={item.id}>
                    <img className='cats__item--image' src={item.thumbnail} alt=""/>
                    <span onClick={() => onDelete(item.id)} className='cats__favorites'><img src={fullHeart}
                                                                                             alt=""/></span>
                </li>
            )
        });
        return (
            <ul className="cats__grid">
                {favoriteCat}
            </ul>
        )
    }


    // console.log(favoriteCats[0])
    const elements = renderCatsList(favoriteCats);

    return (
        <>
            {elements}
        </>


    )
};

export default Favorites;