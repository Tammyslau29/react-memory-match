import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <GameBody/>
        );
    }
}
render(<App/>, document.getElementById('app'));