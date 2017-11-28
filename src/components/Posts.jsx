//Component to listing Posts

import React from 'react';
import ReactDOM from 'react-dom';
import CreatePost from './CreatePost.jsx';
import Api from '../api.js';
import Request from '../request.js';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts() {
        fetch(`${wpApiSettings.root + wpApiSettings.versionString}posts`)
        .then(res => res.json())
        .then(obj => this.setState({
                posts: obj
            })
            )

    }

    rendPosts(posts) {
        if (posts.length != -1) {
            return posts.map(e => 
                <div key={e.id}>
                    <h2>{e.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: e.content.rendered }} />
                </div>
            )
        } else {
            return null
        }
    }

    componentDidMount() {
        this.getPosts()
    }
    render() {
        let posts = this.state.posts;
        return <div className="imported">
            {document.body.classList.contains('logged-in')? <CreatePost /> : null}
            {this.rendPosts(posts)}
        </div>
    }
}

export default Posts