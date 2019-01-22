import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import TodoProvider from './TodoProvider'

import App from './App';


ReactDOM.render(
    
    <BrowserRouter>
    <TodoProvider>
    <App />
    </TodoProvider>
    </BrowserRouter>
    
    , 
    document.getElementById('root')
    );



