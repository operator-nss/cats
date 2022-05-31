import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './CatsList.css';
import fullHeart from '../../assets/images/heart-d.svg';
import useCatsService, {useHttp} from "../../services/CatsService";
import Preloader from "../Preloader/Preloader";
import InfiniteScroll from 'react-infinite-scroll-component';
import nothing from '../../assets/images/nothing.jpg';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useDispatch, useSelector} from "react-redux";
import {catCreated, catsFetching} from "../../actions/actions";


const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Preloader/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Preloader/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state')
    }
}


const CatsList = () => {

    const {cats, catsLoadingStatus, favoriteCats} = useSelector(state => state);
    const {loading, error, getAllCats, process, setProcess} = useCatsService();
    const dispatch = useDispatch();
    const {request} = useHttp();

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [catList, setCatList] = useState([]);
    const [newLoad, setNewLoad] = useState(false);
    const [offset, setOffset] = useState(0);
    const [catEnded, setCatEnded] = useState(false);
    const [newCat, setNewCat] = useState('');




    useEffect(() => {
        onRequest(offset, true);
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCats(offset)
            .then(onCatListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCatListLoaded = (newCatList) => {
        let ended = false;
        if (newCatList.length < 15) {
            ended = true;
        }

        setCatList(catList => [...catList, ...newCatList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 1);
        setCatEnded(catEnded => ended);
        setNewLoad(newLoad => true);
    }

    const addCat = (item) => {
        request("http://localhost:3001/cats", "POST", JSON.stringify(item))
            .then(dispatch(catCreated(item)))
            .catch(err => console.log(err));
    }


    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <li className='cats__item' key={i}>
                    <img className='cats__item--image' src={item.thumbnail != "none" ? item.thumbnail : nothing}
                         alt=""/>
                    <span onClick={() => addCat(item)} className='cats__favorite'><img src={fullHeart} alt=""/></span>
                </li>
            )
        });
        return (
            <ul className="cats__grid">
                {items}
            </ul>
        )
    }

    // console.log(catList)

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(catList), newItemLoading)
    }, [process])


    const loadedCats = newLoad ? <div className='loadMore'>... загружаем еще котиков ...</div> : null;


    return (
        <>
            <InfiniteScroll
                dataLength={catList.length}
                hasMore={true}
                next={() => onRequest(offset, false)}
                scrollThreshold='100%'
                loader={loadedCats}
            >
                {elements}
            </InfiniteScroll>
        </>


    );
};

export default CatsList;