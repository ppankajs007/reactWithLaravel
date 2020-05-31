import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Login from "./components/Auth";
import Dashboard from "./components/Dashboard";

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { BrowserRouter, Route, Link, Switch, withRouter,Router } from "react-router-dom";
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
import history from './history';
import Protacted from  './Protacted';
import ErrorBoundary from './ErrorBoundary'

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            hasError:false
        }
        throw new Error("Error")
    }

    render(){
        return (
        <Router history={history}>
        <Switch>
                <Protacted exact path="/" component={Login} />
                <Protacted exact path="/dashboard" component={Dashboard} />
        </Switch>
        </Router>

    )
    }
    
}

export default withRouter(Main);

if (document.getElementById('example')) {
    ReactDOM.render(<Provider store={store}>
                        <StrictMode>
                            <ErrorBoundary>
                                <Main />
                            </ErrorBoundary>
                        </StrictMode>
                    </Provider>, document.getElementById('example'));
}
