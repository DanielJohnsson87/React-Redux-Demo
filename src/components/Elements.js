import React, {Component} from 'react';
import {connect} from 'react-redux'
import { moveElement, addElement, removeElement } from "../actions/index";

const defaultStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    background: '#000',
    // borderRadius: '50%',
    color: '#fff'
}

const getRandomPos = (max = 400) => {
    return Math.floor(Math.random() * max) + 1
}
const newElement = () => {
    return {
        id: Math.floor(Math.random() * 10000) + 1,
        pos: {
            x: getRandomPos(1200),
            y: getRandomPos(400)
        }
    }
}

const mapStateToProps = state => {
    return {
        elements: state.elements
    }
}
const mapDispatchToProps = dispatch => {
    return {
        move: (event,id) => {
            const action = {
                id,
                pos: elementCoordinates(event)
            }
            dispatch(moveElement(action))
        },
        addNew: () => dispatch(addElement(newElement())),
        remove: (id) => dispatch(removeElement(id))
    };
};

const SingleElement = (props) => {
    const computedStyle = Object.assign({}, defaultStyle, {left: props.pos.x, top: props.pos.y})
    return (
        <div style={computedStyle} onDragEnd={(event) => {props.move(event, props.id)}} onDoubleClick={(event) => {props.remove(props.id)}} draggable="true">
            Rect
        </div>
    )
}


const ConnectedElements = (props) => {
    const Elements = props.elements.map((item) => {
        return (
            <SingleElement pos={item.pos} id={item.id} move={props.move} remove={props.remove}/>
        )
    })
    return (
        <div>
            <button onClick={props.addNew}>Lägg till nytt element</button>
            {Elements}
        </div>
    )
}

const elementCoordinates = (event) => {
    var dragX = event.pageX, dragY = event.pageY - 270;

    console.log("X: "+dragX+" Y: "+dragY, event.relatedTarget);

    return {x: dragX, y: dragY}
}

const Element = connect(mapStateToProps, mapDispatchToProps)(ConnectedElements)

export default Element