import {combineReducers} from 'redux';
import {SAVE_INPUT_NAME, DELETE_NAME} from '../actions/action-types';

const initialState = {
    name: ''
};

export const nameReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_INPUT_NAME:
            return {name: action.payload};
        case DELETE_NAME:
            return '';
        default:
            return state
    }
};
