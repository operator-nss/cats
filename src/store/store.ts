import { configureStore} from '@reduxjs/toolkit'
import cats from './cats/catsSlice'



const store = configureStore({
	reducer: {
		cats
	},
})
export type RootState = ReturnType<typeof store.getState>

export default store