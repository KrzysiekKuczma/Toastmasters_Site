import React from 'react';
import ReactDOM from 'react-dom';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts() {
        const apiPosts = 'http://localhost/wordpress/wp-json/wp/v2/posts'

        fetch(apiPosts, {
            method: 'GET'
        }).then(resp => resp.json())
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
        return <div>{this.rendPosts(posts)}</div>
    }
}

export default Posts