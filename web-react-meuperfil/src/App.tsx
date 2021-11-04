import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header></Header>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default App;
