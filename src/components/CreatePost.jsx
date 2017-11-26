import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../api.js';
import Request from '../request.js';
import axios from 'axios';
import oauthSignature from 'oauth-signature';


class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const api = new Api();
        const request = new Request();

        let postData = {
            title: this.state.title,
            content: this.state.content,
            status: "publish",
        }

        const requestParams = {
            oauth_consumer_key: request.consumerKey(),
            oauth_token: request.token(),
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: request.timestamp(),
            oauth_nonce: request.generateNonce(),
            oauth_version: '1.0'
        }
        console.log(requestParams);
        const encodedSignature = oauthSignature.generate(
            'POST',
            api.baseUrl() + 'posts',
            requestParams,
            request.tokenSecret(),
            request.consumerSecret()
        )
        console.log(encodedSignature);
        const authorizationHeader =
        'OAuth oauth_consumer_key="' + requestParams.oauth_consumer_key
        + '",oauth_token="' + requestParams.oauth_token
        + '",oauth_signature_method="' + requestParams.oauth_signature_method
        + '",oauth_timestamp="' + requestParams.oauth_timestamp
        + '",oauth_nonce="' + requestParams.oauth_nonce
        + '",oauth_version="' + requestParams.oauth_version
        + '",oauth_signature="' + encodedSignature + '"'
        
        console.log(authorizationHeader);
        axios({
            method: 'post',
            url: api.baseUrl() + 'posts',
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

    handleChange(event) {
        this.setState({ [event.target.name]: [event.target.value] });
    }
    sendRequest() {
        console.log("request");
    }
    render() {
       return <form onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="title" />
            <input type="text" name="title" placeholder="Tytuł" onChange={e => this.handleChange(e)} />

            <label htmlFor="content" />
            <textarea id="content" rows="10" placeholder="Treść posta..." />

            <input type="submit" value="Stwórz Post" onClick={this.sendRequest.bind(this)} />
        </form>
    }
}

export default CreatePost;