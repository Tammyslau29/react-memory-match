import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx';

class CardContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          cardHolder : {
              cardFront:["https://s-media-cache-ak0.pinimg.com/736x/0d/68/99/0d6899ccb720c997927f14628d874f20.jpg",
              "https://s-media-cache-ak0.pinimg.com/564x/b8/b6/7f/b8b67fb5356794b2514346d53bcae692.jpg", "https://s-media-cache-ak0.pinimg.com/736x/ac/c2/67/acc26705c02d87711fb181b99f0ee672.jpg"],
              cardBack:"https://s-media-cache-ak0.pinimg.com/736x/7b/f0/bd/7bf0bdf2f0035816b56f81ad4a881c81.jpg"
          }
        };

    }
    render() {
        const cardFrontArray = this.state.cardHolder.cardFront;
        const cardBack = this.state.cardHolder.cardBack
        return (
            <div>
                {cardFrontArray.map((image, index)=>{
                    return <Card id={index} cardFront={image} cardBack={cardBack}/>
                })}
            </div>
        );
    }
}

export default CardContainer;