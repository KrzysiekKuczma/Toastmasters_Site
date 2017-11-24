import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router'
import { HashRouter, Redirect, NavLink, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import api from 'wordpress-rest-api-oauth-1';
import Api from '../api';

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
        const demoApi = new api({
            url: 'http://localhost/wordpress/wp-json/wp/v2',
            credentials: {
                client: {
                    public: 'vIvkjg0fS0YH',
                    secret: 'Lzqgp6AEjkhwJUrDMlqTb6NJl08kUWQEMdkFBjtxEWizDTgu'
                }
            }
        })


        demoApi.authorize().then(function () {
            console.log('All API requests are now authenticated.')
        })

        return <div>
            <Navbar />
            <Routing />
        </div>
    }
}

export default Main;