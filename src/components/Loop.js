import React, { Component } from 'react';
import GameLoop from '../utils/GameLoop'

class Loop extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.loop = new GameLoop()
        this.loop.start()
        this.subscribe(() => {
            console.log('jadå')
        })
    }
    componentWillUnmount() {
        this.loop.stop()
    }
    subscribe(callback) {
        return this.loop.subscribe(callback)
    }
    unsubscribe(id) {
        return this.loop.unsubscribe(id)
    }
    render() {
        return (
            <div className="Loop">
                <h1>I'm the loop</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Loop;
