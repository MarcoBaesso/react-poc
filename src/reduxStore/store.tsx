const store={};
export default store;
/*
import { createStore, applyMiddleware, compose } from 'redux'
//import {StoreCreator,StoreEnhancer, Reducer,DeepPartial} from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
//import rootReducer from '../reducers/index'
//import listen from 'redux-listener-middleware'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

const initialState = {}
const logger = createLogger({
    // ...options
});
//export const reduxActionListener= listen();
//Enhancers add extra functionality to the Redux store
const enhancers = []
//Middleware adds extra functionality to the Redux dispatch function
const middleware = [
    thunk,
    //reduxActionListener,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = composeWithDevTools({});
    middleware.push(logger);

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)
const store: StoreCreator= createStore(

)
const store= createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store
*/