import React, { Component } from 'react';

const defaultStyle = {
    position: 'relative',
    border: '1px solid',
    height: '400px',
}

class Stage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Stage" style={defaultStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default Stage;
