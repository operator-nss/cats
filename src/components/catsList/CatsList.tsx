import React, {useEffect} from 'react';
import './CatsList.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchCats} from "../../store/cats/asyncActions";
import {addFavoriteCate, resetCats, setActuallyItems, setOffset, setPage} from "../../store/cats/catsSlice";
import Preloader from "../Preloader/Preloader";
import CatItem from "../CatItem/CatItem";
import {RootState, useAppDispatch} from "../../store/store";



const CatsList:React.FC = () => {
	
	const dispatch = useAppDispatch();
	const {items, offset, status, actuallyItems, page, favoriteCats} = useSelector((state:RootState) => state.cats)
	const isMounted = React.useRef(false);
	
	let pageCat = `${page}`;
	
	useEffect(() => {
		dispatch(fetchCats({pageCat}));
	}, [pageCat])
	
	useEffect(() => {
		if(isMounted.current) {
			localStorage.setItem('cats', JSON.stringify(favoriteCats));
		}
		isMounted.current = true;
	}, [favoriteCats])
	
	const nextCats = () => {
		if(items.length < 20) {
			dispatch(setPage())
		} else {
			dispatch(setOffset());
			dispatch(setActuallyItems());
		}

	}
	
	
	const addToFavorite = (id: string) => {
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