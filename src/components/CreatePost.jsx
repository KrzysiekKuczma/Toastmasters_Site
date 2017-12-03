import React from 'react';
import ReactDOM from 'react-dom';

class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: false,
            cancel: false,
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
        
        fetch(url,{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'X-WP-nonce': `${wpApiSettings.nonce}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.ok){
                this.props.history.push('/blog');
            } else {
                this.setState({alert:true})
            }
        })
        // .then(() => this.props.history.push('/blog'))
    }
    alert(){
        if (this.state.alert) {
            return <div className="cancel_post_edit">
                <span>Musisz wypełnić wszystkie pola!</span>
                <button className="button" onClick={() => this.setState({ alert: false })}>OK</button>
            </div>
        }
    }
    confirmation(){
        if(this.state.cancel){
            return <div className="cancel_post_edit">
                <span>Czy na pewno chcesz anulować?</span>
                <button className="button" onClick={() => this.props.history.push('/blog')}>TAK</button>
                <button className="button" onClick={() => this.setState({cancel: false})}>NIE</button>
            </div>
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
       return <div className="create_post_form">
           <h2 className="create_post_header">Stwórz nowy Post</h2>
           <form onSubmit={this.onSubmit.bind(this)}>
               <label htmlFor="title" />
               <input className="create_post_field" type="text" name="title" placeholder="Tytuł" onChange={e => this.handleChange(e)} />

               <label htmlFor="excerpt" />
               <input className="create_post_field" type="text" id="excerpt" name="excerpt" placeholder="Krótki opis" onChange={e => this.handleChange(e)} />

               <label htmlFor="content" />
               <textarea className="create_post_field" id="content" rows="10" name="content" placeholder="Treść posta..." onChange={e => this.handleChange(e)} />

               <input className="button" type="submit" value="Stwórz Post" />
               <input className="button" type="button" value="Anuluj" onClick={() => this.setState({cancel: true})}/>
           </form>
           {this.confirmation()}
           {this.alert()}
        </div>
    }
}

export default CreatePost;