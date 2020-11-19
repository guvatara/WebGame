import { createStore } from 'redux';
import rootReducer from './reducers/todoReducers';




/**
 * Этот же интерфейс указывается в качестве состояния при инициализации хранилища.
 */
const configureStore = () => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};

export default configureStore;