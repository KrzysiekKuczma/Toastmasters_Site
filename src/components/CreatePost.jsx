import React from 'react';
import ReactDOM from 'react-dom';


class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            excerpt: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const url = `${wpApiSettings.root + wpApiSettings.versionString}posts`
        
        let data = {
            title: this.state.title,
            content: this.state.content,
            excerpt: this.state.excerpt,
            status: 'publish'
        }
        console.log(data);
        
        fetch(url,{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'X-WP-nonce': `${wpApiSettings.nonce}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this.setState({
            title: '',
            content: '',
            excerpt: ''
        }));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
       return <div className="create_post_form">
           <h2>Stwórz nowy Post</h2>
           <form onSubmit={this.onSubmit.bind(this)}>
               <label htmlFor="title" />
               <input className="create_post_field" type="text" name="title" placeholder="Tytuł" onChange={e => this.handleChange(e)} />

               <label htmlFor="excerpt" />
               <input className="create_post_field" type="text" id="excerpt" name="excerpt" placeholder="Krótki opis" onChange={e => this.handleChange(e)} />

               <label htmlFor="content" />
               <textarea className="create_post_field" id="content" rows="10" name="content" placeholder="Treść posta..." onChange={e => this.handleChange(e)} />

               <input type="submit" value="Stwórz Post" />
           </form>
        </div>
    }
}

export default CreatePost;