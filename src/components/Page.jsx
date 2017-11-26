import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Api, Request } from '../api';

class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pages: []
        }
    }
    getPages(path){
        let api = new Api();

        api.pages(path)
        .then(e => this.setState({
            pages: e
        }))
        
    }
    rendPage(page){
        return page.map(element => {
            if (this.props.match.path === `/${element.slug}`){
             return <div key={element.id} dangerouslySetInnerHTML={{ __html: element.content.rendered }} />
            } else {
                return null
            }
        })
    }
    componentWillMount(){
        this.getPages()
    } 
    render(){ 

        const page = this.state.pages
        if (page.length > 0){
            return <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}>
                    <div className="main_content">
                                <div className="imported">{this.rendPage(page)}</div>
                        </div>
            </ReactCSSTransitionGroup>
        } else { 
            return <div>Loading...</div>
        }
    }
}

export default Page