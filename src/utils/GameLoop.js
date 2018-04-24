class GameLoop {
    constructor() {
        this.fps = 60;
        this.now = 0;
        this.then = Date.now();
        this.interval = 10/this.fps;
        this.delta = 0;
        this.looping = false;
        this.subscribers = []

        this.next = this.next.bind(this)
    }

    start() {
        this.looping = true
        this.next()
    }
    next() {
        this.now = Date.now();
        this.delta = this.now - this.then;

        if(!this.looping) {
            return
        }

        if (this.delta > this.interval) {
            // update time stuffs

            // Just `then = now` is not enough.
            // Lets say we set fps at 10 which mean
            // each frame must take 100ms
            // Now frame executes in 16ms (60fps) so
            // the loop iterates 7 times (16*7 = 112ms) until
            // delta > interval === true
            // Eventually this lowers down the FPS as
            // 112*10 = 1120ms (NOT 1000ms).
            // So we have to get rid of that extra 12ms
            // by subtracting delta (112) % interval (100).
            // Hope that makes sense.

            this.then = this.now - (this.delta % this.interval);
            this.callSubscribingFunctions()

        }

        requestAnimationFrame(this.next);
    }


    stop() {
        this.looping = false
    }

    subscribe(callback) {
        return this.subscribers.push(callback)
    }

    unsubscribe(id) {
        this.subscribers.splice((id-1), 1)
    }

    callSubscribingFunctions() {
        this.subscribers = this.subscribers.reduce((carry, callback) => {
            callback()
            return carry
        },[])
    }

}

export default GameLoop