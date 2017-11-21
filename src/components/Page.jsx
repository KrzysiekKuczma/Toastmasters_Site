import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pageContent: []
        }
    }
    getPage(path){
        path.replace('/', '')
        let api = 'http://localhost/wordpress/wp-json/wp/v2/pages?slug=' + path;

        fetch(api, {
            method: 'GET'
        }).then(resp => resp.json())
        .then(e => this.setState({
            isMounted: true,
            pageContent: e
        }))
        
    }
    rendPage(page){
        return page.map(e=> <div key={e.id} dangerouslySetInnerHTML={{ __html: e.content.rendered }}/>)
    }
    componentWillMount(){
        this.getPage(this.props.match.path)
    } 

    componentWillReceiveProps(newProps){
        this.getPage(newProps.match.path)
    }
    
    render(){ 

        const page = this.state.pageContent
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