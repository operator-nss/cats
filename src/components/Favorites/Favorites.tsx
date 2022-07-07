import React, {useEffect, useState} from 'react';
import './favorites.scss'
import {useDispatch, useSelector} from "react-redux";
import CatItem from "../CatItem/CatItem";
import {addFavoriteCate} from "../../store/cats/catsSlice";
import {RootState} from "../../store/store";

const Favorites:React.FC = () => {
	const dispatch = useDispatch();
	const {favoriteCats, items} = useSelector((state:RootState) => state.cats)
	const isMounted = React.useRef(false);
	
	const addToFavorite = (id:string) => {
		dispatch(addFavoriteCate(id))
	}
	
	useEffect(() => {
		if(isMounted.current) {
			localStorage.setItem('cats', JSON.stringify(favoriteCats));
		}
		isMounted.current = true;
	}, [favoriteCats])

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