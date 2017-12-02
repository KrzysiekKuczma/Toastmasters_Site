//Component to listing Posts

import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../api.js';
import Request from '../request.js';
import PostsSideBar from './PostsSideBar.jsx'
import { HashRouter } from 'react-router-dom';


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
    createPostButton(){
        return (
            <button className="create_post_button" onClick={() => this.props.history.push('/blog/create_post')}>
                Stwórz nowy post
            </button>
        )
    }
    componentDidMount() {
        this.getPosts()
    }
    render() {
        let posts = this.state.posts;
        return <div className="main_content">
            <div className="col span_8_of_12">
            {document.body.classList.contains('logged-in')? this.createPostButton() : null}
                {this.rendPosts(posts)}
            </div>
            <div className="col span_4_of_12">
                <PostsSideBar />
            </div>
        </div>
    }
}

export default Posts