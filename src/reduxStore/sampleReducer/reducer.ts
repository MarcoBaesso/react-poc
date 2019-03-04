import { Reducer } from 'redux';
import { IExampleBeanState } from './types';
import { ExampleActions, IExampleReadAction, IExampleWriteAction } from './actions';

// Type-safe initialState!
export const initialState: IExampleBeanState = {}

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.
const reducer: Reducer<IExampleBeanState> = (state: IExampleBeanState = initialState, action) => {
    // We'll augment the action type on the switch case to make sure we have
    // all the cases handled.
    /*
    switch ((action as ExampleActions).type) {
        case '@@example/READ_ACTION':
            return { ...state};
        case '@@example/WRITE_ACTION':
            return { ...state, exampleFieldString: action.fieldString, exampleFieldInteger: action.fieldInteger};
        default:
            return state;
    }
    */
    if ((action as IExampleReadAction).type){
        return { ...state};
    }
    if ((action as IExampleWriteAction).type){
        return { ...state, exampleFieldString: action.fieldString, exampleFieldInteger: action.fieldInteger};
    }
    return state;

};

export default reducer;