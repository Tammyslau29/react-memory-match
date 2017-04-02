import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx';

class CardContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          cardArray : []
        };

    }
    render() {
    const cardBack ="https://s-media-cache-ak0.pinimg.com/736x/7b/f0/bd/7bf0bdf2f0035816b56f81ad4a881c81.jpg";
    const cardFront = "https://s-media-cache-ak0.pinimg.com/736x/7b/f0/bd/7bf0bdf2f0035816b56f81ad4a881c81.jpg";
        return (
            <div>
                <Card cardFront={cardFront} cardBack={cardBack}/>
            </div>
        );
    }
}

export default CardContainer;