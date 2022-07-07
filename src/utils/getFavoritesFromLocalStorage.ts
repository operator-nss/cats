import {Cats} from "../store/cats/catsSlice";


export const getFavoritesFromLocalStorage = () => {
    const data = localStorage.getItem('cats');
    const items: Cats = data ? JSON.parse(data) : [];
    return  items

}