import React from 'react';
import ReactDOM from 'react-dom';
import CreatePost from './CreatePost';
import { Api, Request } from '../api';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts() {
        const api = new Api()

        api.posts()
            .then(obj => this.setState({
                posts: obj
            })
            )

    }

    rendPosts(posts) {
        if (posts.length != -1) {
            return posts.map(e => <div key={e.id} dangerouslySetInnerHTML={{ __html: e.content.rendered }} />)
        } else {
            return null
        }
    }


    componentDidMount() {
        this.getPosts()
    }
    render() {
        let posts = this.state.posts;
        return <div>
            <CreatePost />
            {this.rendPosts(posts)}
        </div>
        
    }
}

export default Posts