import {combineReducers} from 'redux';

import IncrementReducer from './Increment';

export let initState = {};

let reducers = combineReducers({
    IncrementReducer,
});
export default reducers;
