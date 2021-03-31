
const initState = 0;
import { createReducer } from 'redux-create-reducer';

const initialState = {
    number: 0,
    message: '22222'
};

const IncrementReducer = createReducer(initialState, {
    ['INCREMENT'](state, action) {
        state.number += 1;
        return {...state};
    },
})

export default IncrementReducer;


