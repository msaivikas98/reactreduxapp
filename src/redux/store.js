import {createStore,combineReducers,applyMiddleware} from 'redux'
import laptopReducer from './reducers/laptopResucer'
import mobileReducer from './reducers/mobileReducer'
import usersReducer from './reducers/usersReducer'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    laptops:laptopReducer,
    mobiles:mobileReducer,
    users:usersReducer
})
const store =createStore(rootReducer,applyMiddleware(thunk))
export default store