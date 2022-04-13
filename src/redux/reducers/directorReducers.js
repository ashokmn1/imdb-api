import { actionTypes } from "../constants/actionTypes"


const initialState = {
    directors: [],
}

export const directorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_DIRECTORS:
            return { ...state, directors: payload }
        default:
            return state
    }
}


export const selectedDirectorReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_DIRECTOR:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const moviesReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_MOVIES:
            return { ...state, ...payload }
        default:
            return state
    }
}
