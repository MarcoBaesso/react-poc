import { combineReducers, Dispatch, Reducer } from 'redux';

// Import your state types and reducers here
import reducer from "./sampleReducer/reducer";
import {IExampleBeanState} from "./sampleReducer/types";

// The top-level state object
export interface IApplicationState {
    //router: RouterState,
    exampleBeanState: IExampleBeanState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    exampleBeanState: reducer,
    //router: routerReducer
});

/*
ReducersMapObject
*/