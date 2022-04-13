import { combineReducers } from "redux"
import { directorReducer, moviesReducer, selectedDirectorReducer } from "./directorReducers"



const reducers = combineReducers({
    allDirectors: directorReducer,
    director: selectedDirectorReducer,
    allmovies: moviesReducer,
})

export default reducers