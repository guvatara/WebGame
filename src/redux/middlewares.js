import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'

// NOTE 2019.07.02, 19:28, Igor -- Breaking the dependency cycle
// (accountsGroupsSaga -> api ->  routes -> indexStore -> rootSaga ->
// accountsGroupsSaga) by transfering sagaMiddleware to independent module

// Create & apply redux-saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const mountedMiddleware = applyMiddleware(...middlewares)

export {
    sagaMiddleware,
    // middlewares,
    mountedMiddleware,
}