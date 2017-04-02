import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardClicked : false
        }
        this.handleClick = this.handleClick.bind(this);
        };
    handleClick() {
        this.setState({
            cardClicked: true
        });

    }
    render() {
        const cardDisplay = {
            display: this.state.cardClicked ? "none" : "inline-block"
        }
        return (
            <div className="card">
                <div className="cardFront"><img src={this.props.cardFront}/></div>
                <div style={cardDisplay} onClick={this.handleClick} className="cardBack"><img src={this.props.cardBack}/></div>
            </div>
        );
    }
}

export default Card;