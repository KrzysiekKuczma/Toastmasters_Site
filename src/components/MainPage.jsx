import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }
    getPage() {
        fetch(`${wpApiSettings.root + wpApiSettings.versionString}frontpage`)
            .then(res => res.json())
            .then(e => this.setState({page: e}))
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
            return <div className="main_content" style={{marginTop: "3.5rem"}}>{this.rendPage(page)}</div>
    }
}

export default MainPage;