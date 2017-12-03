import React from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: null
        }
    }

    getPost() {
        const url = `${wpApiSettings.root + wpApiSettings.versionString}posts/${this.props.match.params.id}`

        fetch(url).then(response => response.json())
        .then(response => this.setState({
            post:response
        }))
    }
    componentWillMount(){
        this.getPost()
    }
    render(){
        console.log(this.state);
        if(this.state.post !== null){
            return <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}> 
                    <div className="main_content">
                        <h1>{this.state.post.title.rendered}</h1>
                        <div className="post_content" dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} />
                    </div>
            </ReactCSSTransitionGroup>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default Post;