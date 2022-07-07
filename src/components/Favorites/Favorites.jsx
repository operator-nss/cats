import React, {useState} from 'react';
import './favorites.css'
import {useDispatch, useSelector} from "react-redux";
import CatItem from "../CatItem/CatItem";
import {addFavoriteCate} from "../../store/cats/catsSlice";

const Favorites = () => {
	const dispatch = useDispatch();
	const {favoriteCats, items} = useSelector(state => state.cats)
	
	const addToFavorite = (id) => {
		console.log(id)
		dispatch(addFavoriteCate(id))
	}

	return (
		<ul className="cats__grid">
			{
				favoriteCats.length ? favoriteCats.map((item) => {
					return <CatItem key={item.id}
					                added={true}
					                addToFavorite={addToFavorite}
					                {...item}/>
				}) : null
			}
		</ul>
	);
};

export default Favorites;