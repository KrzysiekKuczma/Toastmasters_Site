import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router'
import { HashRouter, Redirect, NavLink, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


//Importing child Components
import Page from './Page.jsx'
import Posts from './MainPage.jsx'
import Carousel from './Carousel.jsx'
import Navbar from './Navbar.jsx'

class Routing extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            pages: []
        }
    }
    getPages() {
        const api = 'http://toastmasters.asbiro.pl/wp-json/wp/v2/pages/?per_page=20';
        fetch(api, {
            method: 'GET'
        }).then(resp => resp.json())
            .then((e => e.map(e => e.slug)))
            .then(e => this.setState({
                pages: e
            }))        
    }

    rendPagesRoutes(pages){
        return pages.map((e, ind) => {
            if (e != ''){
                return <Route exact key={ind} path={`/${e}`} component={Page} />
            } else {
                return null
            }
        })
    }
    componentWillMount(){
        this.getPages()
    }
    render(){
        return <div>
            <div className="section group">
                <div className="col span_12_of_12">
                    <HashRouter>
                        <Switch>
                            <Route exact path='/' component={Carousel} />
                            {this.rendPagesRoutes(this.state.pages)}
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        </div>
    }
}

class Main extends React.Component{
    render(){
        return <div>
            <Navbar />
            <Routing />
        </div>
    }
}

export default Main;