import React from 'react';
import ReactDOM from 'react-dom';



class Slide extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const style = {
            backgroundImage: `url(${this.props.backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
        }
        return <div className="slide" style={style}>
                    <div className="slide_slogan_container">
                        <h2 className="slide_slogan">{this.props.slogan}</h2>
                    </div>
                </div>
    }
}

export default Slide;