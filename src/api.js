const baseUrl = 'http://localhost/wordpress/wp-json/wp/v2/';
const navUrl = 'http://localhost/wordpress/wp-json/menus/v1/menus/';

class Api {

    baseUrl(){
        return baseUrl;
    }
    
    posts(post){
        let url = `${baseUrl}posts`;

        if (post !== undefined){
            url += `/${post}`
        }
        return fetch(url).then(res => res.json());
    }
    
    pages(page){
        let url = `${baseUrl}pages`;

        if (page !== undefined){
            url+= `/${page}`
        }
        return fetch(url).then(res => res.json());
    }
    
    navbar(){
        let url = `${navUrl}top`;
        return fetch(url).then(res => res.json());
    }
    
    carousel(){
        let url = `${baseUrl}media?search=carousel`;
        return fetch(url).then(res => res.json());
    }
}


class Request {
    consumerKey(){return 'WYYcNr73O5rC'}
    
    consumerSecret(){return 'Yt9wLRfoFO3GW1E45Bo22dpcz8klGl2BRdMwIuuLqsqv72yu'}
    
    token(){return 'wtr6O9l0DqMzIoTmbCz4OTLI'}

    tokenSecret() { return '2mH8CjGTX4pkqcCcoNHvxYYqtznqeiOw9yrm70rQ55FkaXpE'}

    timestamp() { return new Date().getTime().toString().slice(0, 10)}

    generateNonce() {
        let text = ''
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 11; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text;
    }
}

export { Api, Request };