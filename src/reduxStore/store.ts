import { createStore, applyMiddleware, compose, Store } from 'redux';
import {DeepPartial,StoreCreator,StoreEnhancer, Reducer} from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
// import rootReducer from '../reducers/index'
// import listen from 'redux-listener-middleware'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// If you use react-router, don't forget to pass in your history type.
import { History } from 'history';

// Import the state interface and our combined reducers.
import { IApplicationState, reducers } from './';

function configureStore(
    history: History,
    initialState: IApplicationState,
): Store<IApplicationState> {
    const enhancers = []
    const middleware = [
        thunk,
        //reduxActionListener,
        routerMiddleware(history)
    ]

    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({
            // ...options
        });
        const devToolsExtension = composeWithDevTools({});
        middleware.push(logger);

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }
    // We'll create our store with the combined reducers and the initial Redux state that
    // we'll be passing from our entry point.
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
}

const mInitialState : IApplicationState= {
    exampleBeanState: {},
    router: {
        location: null
    }
};

export default configureStore(createHistory(), mInitialState);



/*
import { applyMiddleware, compose, createStore } from 'redux'
import {DeepPartial,StoreCreator,StoreEnhancer, Reducer} from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
// import rootReducer from '../reducers/index'
// import listen from 'redux-listener-middleware'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

const initialState = {}
const logger = createLogger({
    // ...options
});
// export const reduxActionListener= listen();
// Enhancers add extra functionality to the Redux store
const enhancers = []
// Middleware adds extra functionality to the Redux dispatch function
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

const store={};

export default store;
*/




