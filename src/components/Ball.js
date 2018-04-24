import React, {Component} from 'react';
import {connect} from 'react-redux'
import { moveBall } from "../actions/index";

const defaultStyle = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    background: '#000',
    borderRadius: '50%',
    color: '#fff'
}

const getRandomPos = () => {
    return Math.floor(Math.random() * 400) + 1
}
const mapStateToProps = state => {
    return {
        pos: {
            x: state.ball.x,
            y: state.ball.y
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        move: pos => dispatch(moveBall(pos))
    };
};

const ConnectedBall = (props) => {
    const computedStyle = Object.assign({}, defaultStyle, {left: props.pos.x, top: props.pos.y})
    return (
        <div style={computedStyle} onDragEnd={(e) => {props.move(elementCoordinates(e))}} draggable="true">
            Ball
        </div>
    )
}

const elementCoordinates = (event) => {
    var dragX = event.pageX, dragY = event.pageY - 270;

    console.log("X: "+dragX+" Y: "+dragY, event.relatedTarget);

    return {x: dragX, y: dragY}
}

const Ball = connect(mapStateToProps, mapDispatchToProps)(ConnectedBall)

export default Ball