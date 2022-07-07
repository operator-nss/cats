import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';


const rootElem = document.getElementById('root');
if(rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

}
