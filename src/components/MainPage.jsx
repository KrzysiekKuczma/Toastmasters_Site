import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../api.js';
import Request from '../request.js';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }
    getPage() {
        const mainPage = '310'
        let api = new Api()
        api.pages(mainPage).then(e => this.setState({page: e}))
    }
    rendPage(page) {
        if (page.content !== undefined){
            return <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        } else {
            return 'loading...';
        }
    }
    componentDidMount() {
        this.getPage()
    }

    render() {
        const page = this.state.page
            return <div>{this.rendPage(page)}</div>
    }
}

export default MainPage;