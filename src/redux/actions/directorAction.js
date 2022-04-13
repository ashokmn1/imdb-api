import { actionTypes } from "../constants/actionTypes"

export const setDirectors = (directors) => {
    return {
        type: actionTypes.SET_DIRECTORS,
        payload: directors,
    }
}

export const selectedDirector = (director) => {
    return {
        type: actionTypes.SELECTED_DIRECTOR,
        payload: director,
    }
}

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        payload: movies,
    }
}
