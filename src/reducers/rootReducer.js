import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer'
const rootReducer = combineReducers({

    itemsReducer : itemsReducer,
    cartReducer : cartReducer
})

export default rootReducer