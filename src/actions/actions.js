export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER ='SET_USER';
export const SET_USERDATA ='SET_USERDATA';
export const SET_TOKEN = 'SET_TOKEN';

export function setMovies(value) {
    return {type: SET_MOVIES, value};
}

export function setFilter(value) {
    return { type: SET_FILTER, value};
}

export function setUser(value) {
    return { type: SET_USER, value};
}

export function setUserData(value) {
    return {type: SET_USERDATA, value};
}

export function setToken(value) {
    return {type: SET_TOKEN, value};
}