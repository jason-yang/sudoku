import React from 'react';

let Cell = React.createClass({
    handleChange: function(value) {
        this.props.onChange({
            index: this.props.index,
            value: value
        });
    },
    handleKeyDown: function(e) {
        e.preventDefault();
        if ([8, 46].indexOf(e.keyCode) != -1) {
            this.setState({value: ''});
            this.handleChange(null);
        }

        if (/^[0-9]/.test(e.key)) {
            let key = parseInt(e.key);
            this.setState({value: key});
            this.handleChange(key);
        }
    },
    getInitialState: function() {
        return {value: ''};
    },
    render: function() {
        return (
            <input type="text" className="cell" onKeyDown={this.handleKeyDown} value={this.state.value} />
        );
    }
});

export default Cell;