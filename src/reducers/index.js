import {combineReducers} from 'redux';
import {ball} from './ball'
import {elements} from './elements'

export default combineReducers({
    ball,
    elements
});



// const rootReducer = (state = initialState, action) => {
//     console.log('root reducer', action)
//     switch (action.type) {
//         case MOVE_BALL:
//             // state.balls.push(action.payload);
//             // return state;
//             console.log('Payload?', action.payload)
//
//             return {...state, ball: action.payload};
//         default:
//             return state;
//     }
// };
// export default rootReducer;