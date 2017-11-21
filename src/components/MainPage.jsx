import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: []
        }
    }
    getPage() {
        let api = 'http://localhost/wordpress/wp-json/wp/v2/pages?slug=strona-glowna';

        fetch(api, {
            method: 'GET'
        }).then(resp => resp.json())
            .then(e => this.setState({
                page: e
            }))
    }
    rendPage(page) {
        return <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered }} />
    }
    componentDidMount() {
        this.getPage()
    }

    render() {
        const page = this.state.page
        if (page.length > 0) {
            return <div>{this.rendPage(page)}</div>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default MainPage