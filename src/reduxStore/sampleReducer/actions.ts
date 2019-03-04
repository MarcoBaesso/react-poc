import { Action } from 'redux';

export interface IExampleReadAction extends Action {
    type: '@@example/READ_ACTION';
    payload: {
        exampleStringToRead: string;
    };
}

export interface IExampleWriteAction extends Action {
    type: '@@example/WRITE_ACTION';
    payload: {
        fieldString: string;
        fieldInteger: number;
    };
}


// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type ExampleActions = IExampleReadAction | IExampleWriteAction;
