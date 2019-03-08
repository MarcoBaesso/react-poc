import * as React from 'react';
import {Router} from 'react-router';
import { Route, Switch } from 'react-router'
import { History, createBrowserHistory } from 'history';
import App from "app";

export const history: History = createBrowserHistory({
    basename: "subdirectory"
});

/*
export class NoMatch extends React.PureComponent {
    public render() {
        return (<div>No matching</div>);
    }
}
*/

export class AppRouter extends React.PureComponent {

    public render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/main" component={App}/>
                    {/*
                    <Route path="/" component={NoMatch}/>
                    */}
                </Switch>
            </Router>
        )
    }

}
