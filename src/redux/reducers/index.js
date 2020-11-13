import { combineReducers } from 'redux'

const appReducer = combineReducers({

})

const rootReducer = (state, action) => {
    if (action.type === 'DESTROY_STORE') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer