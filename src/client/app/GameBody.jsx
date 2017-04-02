import React from 'react';
import { render } from 'react-dom';
import CardContainer from './CardContainer';
import Stats from './Stats';

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