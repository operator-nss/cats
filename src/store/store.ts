import { configureStore} from '@reduxjs/toolkit'
import cats from './cats/catsSlice'
import {useDispatch} from "react-redux";



const store = configureStore({
	reducer: {
		cats
	},
})
export type RootState = ReturnType<typeof store.getState>

export default store;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();