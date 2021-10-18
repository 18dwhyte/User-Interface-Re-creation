import React, { Component } from 'react'
import './CardItem.css'
class CardItem extends Component
{
    render(){
        return(
            
            <figure className="box">
                <figcaption>SPONSORED ADVERTISEMENT</figcaption>
                <img className='ads' src={this.props.source} alt={this.props.desc} height='200px'></img>
            </figure>
            
        );
    }
}

export default CardItem;