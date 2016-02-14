import React from 'react';
import Block from './Block.jsx';

let Board = React.createClass({
    handleBlockChange: function(block) {
        console.log("Block:", block);
        this.props.onChange(block);
    },
    render: function() {
        console.log("Board size: " + this.props.size);
        let blockNodes = [];
        for (var i = 0; i < this.props.size; i++) {
            blockNodes.push(
                <Block size={this.props.size} index={i} onChange={this.handleBlockChange}/>
            );
        }

        return (
            <div id="board">
                {blockNodes}
            </div>
        );
    }
});

export default Board;