//Component to listing Posts

import React from 'react';
import ReactDOM from 'react-dom';
import PostsSideBar from './PostsSideBar.jsx'
import { HashRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
            return posts.map(Element => 
                <div className="post" key={Element.id}>
                    <h2>{Element.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: Element.content.rendered }} />
                </div>
            )
        } else {
            return null
        }
    }
    createPostButton(){
        return (
            <button className="button create_post_button" onClick={() => this.props.history.push('/blog/create_post')}>
                Stwórz nowy post
            </button>
        )
    }
    componentDidMount() {
        this.getPosts()
    }
    render() {
        let posts = this.state.posts;
        return <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}>
            <div className="main_content">
                <div className="section group">
                    <div className="col span_4_of_12">
                        <PostsSideBar />
                    </div>
                    <div className="col span_8_of_12 recent_posts">
                        {document.body.classList.contains('logged-in') ? this.createPostButton() : null}
                        {this.rendPosts(posts)}
                    </div>
                </div>
            </div>
            </ReactCSSTransitionGroup>
    }
}

export default Posts