import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        case ActionTypes.DELETE_FAVORITE:
            return state.filter(favorite => favorite != action.payload); // creates a new array exclusing the campsite in the payload

        default:
            return state;
    }
};