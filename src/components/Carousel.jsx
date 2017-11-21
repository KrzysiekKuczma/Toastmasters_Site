import React from 'react';
import ReactDOM from 'react-dom'
import Slide from './Slide.jsx'
import MainPage from './MainPage.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0,
            photos: []
        }
    }
    getPhotos() {
        const api = "http://localhost/wordpress/wp-json/wp/v2/media?search=carousel";

        fetch(api, {
            method: 'GET'
        }).then(resp => resp.json())
        .then(arr => this.setState({
            ...this.state,
            photos: arr
        }))
    }
    rendSlide(){
        const photos = this.state.photos;
        let index = this.state.activeIndex;
        if (this.state.photos.length > 0){
                    return <Slide
                        key={photos[index].id}
                    slogan={photos[index].alt_text}
                    backgroundImage={photos[index].guid.rendered}
                    />
        } else {
            return "Loading..."
        }
    }
    nextSlide() {
        const photos = this.state.photos.length;
        let index = this.state.activeIndex;

        photos > index + 1 ? index += 1 : index = 0; 

        this.setState({
            activeIndex: index
        })
    }
    componentDidMount(){
        this.getPhotos()
    }
    componentDidUpdate(){
        if (this.state.photos.length === 0){
        } else {
            console.log('carousel did update ' + this.state.activeIndex)
            this.changeSlide = setTimeout(this.nextSlide.bind(this), 7000)
        }
    }
    componentWillUnmount(){
        clearTimeout(this.changeSlide)
    }
    render() {
        return <div>
            <div className="carousel">
                {this.rendSlide()}
            </div>
            <div className="main-content">
             <MainPage />
            </div>
        </div>
    }

}

export default Carousel