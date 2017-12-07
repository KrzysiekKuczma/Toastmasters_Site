import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { BrowserRouter, HashRouter, NavLink, Switch } from 'react-router-dom';

//Creating navbar with React Router

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: null,
            logo: null
        }
    }

    getNavbar() {
        fetch(`${wpApiSettings.root}menus/v1/menus/top`)
            .then(res => res.json())
            .then(obj => this.setState({
                navbar: obj
            }))
    }
    getLogo(){
        fetch(`${wpApiSettings.root}wp/v2/media?search=main_logo`)
            .then(res => res.json())
            .then(obj => this.setState({
                logo: obj[0]
            }))
    }
    rendNavbar(nav) {
        if (nav.length > 0) {
            return nav.map(e => <li key={e.ID}><NavLink activeClassName="nav_active" pageid={e.ID} exact to={`${e.url.replace(site.homeUrl, '')}`}>{e.title}</NavLink></li>)
        } else {
            return null
        }
    }

    componentWillMount() {
        this.getNavbar()
        this.getLogo()
    }

    render() {
        const logo = this.state.logo;
        const navbar = this.state.navbar
        return < div className="header_background" >
            <div className="section group">
                <header className="col span_12_of_12">
                    <div className="col span_3_of_12 header_image">
                        <img src={logo != null? logo.source_url : null} />
                    </div>

                    {/* Navigation */}

                    <nav className="navbar col span_9_of_12">
                        {/*Hambrger icon*/}
                        <input id="menu_checkbox" type="checkbox" />
                        <label htmlFor="menu_checkbox">
                            <span className="hamburger_spans"></span>
                            <span className="hamburger_spans"></span>
                            <span className="hamburger_spans"></span>
                        </label>
                            <ul id="menu_pages">
                                {navbar != null ? this.rendNavbar(navbar.items) : "Loading..."}
                            </ul>
                    </nav>
                </header>
            </div>
        </div >
    }
}

export default Navbar;