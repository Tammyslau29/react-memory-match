import React from 'react';
import {render} from 'react-dom';

class Stats extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            statistics:{
                gamesPlayed: 0,
                accuracy: 0,
                attempts: 0
            }
        };

    }
    render() {

        return (
            <div></div>
        );
    }
}

export default Stats;