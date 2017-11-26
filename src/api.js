const baseUrl = "http://localhost/wordpress/wp-json/wp/v2/";
const navUrl = "http://localhost/wordpress/wp-json/menus/v1/menus/";

class Api {
    baseUrl() {return baseUrl};

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

export default Api;
