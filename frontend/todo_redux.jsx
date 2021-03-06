import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.store = configureStore(); 
    ReactDOM.render(<Root store={configureStore()} />,root);
});