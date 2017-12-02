import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter, Redirect, Link, Switch } from 'react-router-dom';

class PostsSideBar  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    getPostList(){
        const url = `${wpApiSettings.root + wpApiSettings.versionString}posts?per_page=100`

        fetch(url).then(response => response.json())
        .then(response => this.setState({
            posts: response
        }));
    }

    rendList(posts) {
        if (posts.length != -1) {
            return posts.map(element => {
                return <Link key={element.id} 
                    className="link_to_post" 
                    to={`/blog/${element.id}`}>
                        {element.title.rendered}
                </Link>
            });
        } else {
            return null
        }
    }
    componentWillMount() {
        this.getPostList();
    }



    render(){
        const posts = this.state.posts;
        return <div className="posts_list">
            {posts.length != -1 ? <h3>SPIS POSTÓW</h3> : null}
                {this.rendList(posts)}
        </div>
    }
}

export default PostsSideBar;