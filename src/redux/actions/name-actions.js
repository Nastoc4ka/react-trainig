import {SAVE_INPUT_NAME, DELETE_NAME} from './action-types';

export const saveInputName = (name) => {
    return {
        type: SAVE_INPUT_NAME,
        payload: name
    }
};

export const deleteName = () => {
    return {
        type: DELETE_NAME,
    }
};