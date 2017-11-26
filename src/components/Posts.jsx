import React from 'react';
import ReactDOM from 'react-dom';
import Api from "../api";

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts() {
        const api = new Api()

        api.posts().then(obj => this.setState({
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
        return <div className="imported">{this.rendPosts(posts)}</div>
    }
}

export default Posts