import React from 'react';
import ReactDOM from 'react-dom'

class NoPage extends React.Component {
    render(){
        const divStyle = {
            width: '100%',
            height: '90vh',
            paddingTop: '20vh',
            backgroundColor: '#004165',
            color: '#EFF0F4'
        }
        const spanStyle = {
            fontWeight: '700',
            fontSize: '8rem'
        }
        const headerStyle = {
            marginTop: '3rem',
            color: '#EFF0F4',
            fontSize: '2.5rem'
        }
        return <div style={divStyle}>
            <span style={spanStyle}>404</span>
            <h1 style={headerStyle}>Ta strona nie istnieje</h1>
        </div> 
    }
}

export default NoPage;