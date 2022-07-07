import React, {useEffect} from 'react';
import './CatsList.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchCats} from "../../store/cats/asyncActions";
import {addFavoriteCate, resetCats, setActuallyItems, setOffset} from "../../store/cats/catsSlice";
import Preloader from "../Preloader/Preloader";
import CatItem from "../CatItem/CatItem";


const CatsList = () => {
	
	const dispatch = useDispatch();
	const {items, offset, status, actuallyItems, page} = useSelector(state => state.cats)
	
	let pageCat = `${page}`;
	
	useEffect(() => {
		dispatch(fetchCats({pageCat}));
	}, [pageCat])
	
	const nextCats = () => {
		dispatch(setOffset());
		dispatch(setActuallyItems());
	}
	
	
	const addToFavorite = (id) => {
		console.log(id)
		dispatch(addFavoriteCate(id))
	}
	
	
	return (
		<>
			<ul className="cats__grid">
				{
					actuallyItems.length ? actuallyItems.map((item) => {
						return <CatItem added={false} key={item.id} addToFavorite={addToFavorite} {...item}/>
					}) : null
				}
			</ul>
			
			{status === 'loading' ? <Preloader/> : <div className='cats__loading'>
				{offset.end === 100 ?
					<button className='button' onClick={nextCats}>Следующая страница котиков</button>
					: <button className='button' onClick={nextCats}>Загрузить еще котиков</button>
				}
			
			</div>}
		</>
	
	
	);
};

export default CatsList;