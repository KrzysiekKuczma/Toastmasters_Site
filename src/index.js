import React from 'react';
import ReactDOM from 'react-dom';
import sassStyle from './styles/style.scss';

//Import components
import Template from './components/MainTemplate.jsx'


ReactDOM.render(
    <div className="section group">
         <Template />
    </div>, 
    document.getElementById('root')
);
