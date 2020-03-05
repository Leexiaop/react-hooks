import React from 'react';
import Router from '../src/router'
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store'
import './App.scss';
export default () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Router />
            </Provider>
        </div>
    );
}
