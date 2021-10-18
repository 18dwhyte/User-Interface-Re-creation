import React, { Component } from 'react'
import CardItem from './CardItem';
import './Card.css'

class Card extends Component
{
    render(){
        return(
            
            <div className='card'>
                <CardItem
                    desc="Legendary Motorsport"
                    source="./motosport.png"
                />
                <CardItem
                    desc="Diamond Casino"
                    source="./diamond.png"
                />
                <CardItem
                    desc="Southern Super Autos"
                    source="./superautos.png"
                
                />
            </div>
        );
    }
}

export default Card;