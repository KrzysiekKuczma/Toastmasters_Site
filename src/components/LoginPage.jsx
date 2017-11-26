import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../Api'

class LoginForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    onSubmit(event){
        event.preventDefault();

        const api = new Api();

    }
    onChange(event){
        this.setState({[event.target.name]: [event.target.value]});
    }
    sendRequest(){

    }
    render(){
        <form onSubmit={this.onSubmit()}>
            <h1>Login</h1>
            <label htmlFor="username" />
            <input type="text" name="username" placeholder="username" onChange={handleChange()}/>

            <label htmlFor="password" />
            <input type="password" name="password" placeholder="password"/>

            <input type="submit" onClick={this.sendRequest(bind(this))}>Login</input>
        </form>
    }
} 

class LoginPage extends React.component{
    constructor(props){
        super(props)

    }
    render(){
        return <div className="login_page">
            <LoginForm />
        </div>
    }
}

export default LoginPage;