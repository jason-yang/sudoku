import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
    handleClick(e) {
        console.log(e);
        console.log('test');
    }

    render() {
        return (
            <div>
                <p onClick={this.handleClick}>Hello React!</p>
                <AwesomeComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));