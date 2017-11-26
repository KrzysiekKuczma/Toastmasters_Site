import React from 'react';
import ReactDOM from 'react-dom';

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
        console.log(event)

    }
    onChange(event){
        this.setState({[event.target.name]: [event.target.value]});
    }
    render(){
        <form onSubmit={this.onSubmit()}>
            <h1>Login</h1>
            <label htmlFor="username" />
            <input type="text" id="username" onChange={handleChange()}/>

            <label htmlFor="password" />
            <input type="password" id="password"/>

            <input type="submit">Login</input>
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