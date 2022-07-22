import React, {useState} from 'react';
import fullHeart from "../../assets/images/heart-d.svg";
import {useDispatch} from "react-redux";
import heart from '../../assets/images/heart-d.svg';
import clsx from "clsx";
import Skeleton from "../Skeleton/Skeleton";

type CatItemProps = {
    addToFavorite: (id: string) => void,
    id: string,
    url: string,
    added: boolean
}

const CatItem: React.FC<CatItemProps> = ({addToFavorite, id, url, added}) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(added);
    const [imageLoaded, setImageLoaded] = useState(false);


    const onClickFavorite = () => {
        addToFavorite(id)
        setIsFavorite(!isFavorite)
    }

    const handleImageLoaded = () => {
        setImageLoaded(true);
    }

    return (
        <li className='cats__item' key={id}>
            <Skeleton imageLoaded={imageLoaded}/>
            <img onLoad={handleImageLoaded}
                 className={clsx({'cats__item--image-loaded': imageLoaded}, 'cats__item--image')}
                 src={url}
                 alt=""/>


            <span onClick={onClickFavorite} className={clsx(('cats__favorite'), {favorite: isFavorite})}>
							<img src={isFavorite ? fullHeart : heart} alt=""/></span>
        </li>
    );
};

export default CatItem;