import {
    createStore,
    //compose,
    // applyMiddleware, // Not used (see `middlewares`)
} from 'redux'
import rootReducer from './reducers'

/*
import { mountedMiddleware } from './middlewares'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
*/

/*const store = createStore(
    rootReducer,
    composeEnhancers(mountedMiddleware /!* applyMiddleware(...middlewares) *!/),
)*/

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store