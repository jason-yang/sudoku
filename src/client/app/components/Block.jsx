import React from 'react';
import Cell from './Cell.jsx';

let Block = React.createClass({
    handleCellChange: function(cell) {
        console.log("Cell:", cell);
    },
    render: function() {
        let cellNodes = [];
        for (let i = 0; i < this.props.size; i++) {
            cellNodes.push(
                <Cell size={this.props.size} index={i} onChange={this.handleCellChange}/>
            );
        }

        return (
            <div className="block">
                {cellNodes}
            </div>
        );
    }
});

export default Block;