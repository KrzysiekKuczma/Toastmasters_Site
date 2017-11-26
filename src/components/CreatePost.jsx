import React from 'react';
import ReactDOM from 'react-dom';
import { Api, Request } from '../api';
import axios from 'axios';
import oauthSignature from 'oauth-signature';


class CreatePost extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    onSubmit(event){
        event.preventDefault();
        const api = new Api();
        const request = new Request();
        let postData = {
            title: this.state.title,
            content: this.state.content,
            status: "publish",
            consumerSecret: request.consumerSecret(),
            tokenSecret: request.tokenSecret(),
        }

        const requestParams = {
            oauth_consumer_key: request.consumerKey(), 
            oauth_token: request.token(),
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: request.timestamp(),
            oauth_nonce: request.generateNonce(),
            oauth_version: '1.0'
        }

        const encodedSignature = oauthSignature.generate(
            'POST', 
            api.basicUrl()+'/posts',
            requestParams,
            this.state.tokenSecret,
            this.state.consumerSecret
        )

        const authorizationHeader =
            'OAuth oauth_consumer_key="' + requestParams.oauth_consumer_key
            + '",oauth_token="' + requestParams.oauth_token
            + '",oauth_signature_method="' + requestParams.oauth_signature_method
            + '",oauth_timestamp="' + requestParams.oauth_timestamp
            + '",oauth_nonce="' + requestParams.oauth_nonce
            + '",oauth_version="' + requestParams.oauth_version
            + '",oauth_signature="' + encodedSignature + '"'

        axios({
            method: 'post',
            url: api.basicUrl() + '/posts',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authorizationHeader
            },
            data: postData
        })
            .then(res => {
                console.log(res)
            })
    }

    onChange(event){
        this.setState({[event.target.name]: [event.target.value]});
    }
    sendRequest(){

    }
    render(){
        <form onSubmit={this.onSubmit()}>
            <h1>Login</h1>
            <label htmlFor="title" />
            <input type="text" name="title" placeholder="Tytuł" onChange={handleChange()}/>

            <label htmlFor="content" />
            <textarea id="content" rows="10" placeholder="Treść posta..." />

            <input type="submit" onClick={this.sendRequest(bind(this))}>Login</input>
        </form>
    }
} 

export default CreatePost;