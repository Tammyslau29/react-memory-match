import React from 'react';
import { render } from 'react-dom';
import CardContainer from './CardContainer.jsx';
import Stats from './Stats.jsx';

class GameBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Stats/>
               <CardContainer/>
            </div>
        );
    }
}
export default GameBody;