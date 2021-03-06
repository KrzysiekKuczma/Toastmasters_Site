//Main template for SPA

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { HashRouter, BrowserRouter, Switch  } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Importing child Components
import Page from './Page.jsx'
import Posts from './Posts.jsx'
import Post from './Post.jsx'
import Carousel from './Carousel.jsx'
import Navbar from './Navbar.jsx'
import CreatePost from './CreatePost.jsx';
import NoPage from './NoPage.jsx';

class Routing extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            pages: []
        }
    }
    getPages() {
        fetch(`${wpApiSettings.root + wpApiSettings.versionString}pages`)
        .then(response => response.json())
        .then((elements => elements.map(element => element)))
            .then(elements => this.setState({
                pages: elements
            }))        
        }
        
        rendPagesRoutes(pages){
            return pages.map((e, ind) => {
                if (e != ''){
                    return <Route key={ind} exact path={`/${e.slug}`} component={Page} />
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
                        <Route exact path='/' component={Carousel} />
                        <Route exact path='/blog' component={Posts}/>
                        <Route exact path='/blog/create_post' component={CreatePost} />
                        <Route path='/blog/:id' component={Post} />
                        {this.rendPagesRoutes(this.state.pages)}
                    </div>
               </div>
        </div>
    }
}

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    render(){
        return <div>
            <Navbar />
            <Routing />
        </div>
    }
}

export default Main;