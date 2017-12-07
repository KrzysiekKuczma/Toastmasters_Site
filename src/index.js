import React from 'react';
import ReactDOM from 'react-dom';
import sassStyle from './styles/style.scss';
//Import components
import Template from './components/MainTemplate.jsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <div className="section group">
        <BrowserRouter>
            <Template />
        </BrowserRouter>
    </div>, 
    document.getElementById('root')
);
