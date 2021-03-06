import { combineReducers } from "redux";
import { SET_FILTER, SET_MOVIES, SET_USER, SET_USERDATA, SET_TOKEN } from "../actions/actions";

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

function user(state = '', action) {
    switch (action.type) {
        case SET_USER:
            return action.value;
        default:
            return state;
    }
}

function userData(state=[], action) {
    switch (action.type) {
        case SET_USERDATA:
            return action.value;
        default:
            return state;
    }
}

function token(state='', action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.value;
        default:
            return state;
    }
}

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    user,
    userData,
    token
});

export default moviesApp;