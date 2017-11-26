import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router'
import { HashRouter, BrowserRouter, Redirect, NavLink, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Api from '../api.js';
import Request from '../request.js';

//Importing child Components
import Page from './Page.jsx'
import Posts from './Posts.jsx'
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
        const api = new Api();

        api.pages().then((elements => elements.map(element => element)))
            .then(elements => this.setState({
                pages: elements
            }))        
        }
        
        rendPagesRoutes(pages){
            return pages.map((e, ind) => {
                if (e != ''){
                    return <Route key={ind} exact path={`/${e.slug}`} pageid={e.id} component={Page} />
                } else {
                return null
            }
        })
    }
    componentWillMount(){
        this.getPages();
    }
    render(){
        return <div>
            <div className="section group">
                <div className="col span_12_of_12">
                    <HashRouter>
                        <Switch>
                            <Route exact path='/' component={Carousel} />
                            <Route exact path='/blog' component={Posts} />
                            {this.rendPagesRoutes(this.state.pages)}
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        </div>
    }
}

class Main extends React.Component{
constructor(){
    this.state = {
        loggedIn: false
    }
}
    checkLogin() {
        const body = document.querySelector('body');

        console.log(body);
    }
    componentWillMount(){
        this.checkLogin()
    }
    render(){
        return <div>
            <Navbar />
            <Routing />
        </div>
    }
}

export default Main;