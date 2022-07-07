import React, {useState} from 'react';
import fullHeart from "../../assets/images/heart-d.svg";
import {useDispatch} from "react-redux";
import heart from '../../assets/images/heart-d.svg';
import clsx from "clsx";

const CatItem = ({addToFavorite, id, url, added}) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(added);
	
	
	const onClickFavorite = () => {
		addToFavorite(id)
		setIsFavorite(!isFavorite)
	}
	
	return (
		<li className='cats__item' key={id}>
			<img className='cats__item--image'
			     src={url}
			     alt=""/>
			<span onClick={onClickFavorite} className={clsx(('cats__favorite'), {favorite: isFavorite})}>
							<img src={isFavorite ? fullHeart : heart} alt=""/></span>
		</li>
	);
};

export default CatItem;