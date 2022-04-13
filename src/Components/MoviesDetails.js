import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectedDirector } from '../redux/actions/directorAction'
import MovieComponent from './MovieComponent'

const MoviesDetails = () => {
  const dispatch = useDispatch()
  const { directorId } = useParams()

  const fetchMoviesDetails = async () => {
    const response = await axios.get(`https://node-movie-api-ashok.herokuapp.com/movies/${directorId}`).catch(err => {
      console.log('error', err)
    })
    dispatch(selectedDirector(response.data))
  }

  useEffect(() => {
    if (directorId && directorId !== "") fetchMoviesDetails()
  }, [directorId])


  return (
    <div className='movie_container'>
      <MovieComponent />
    </div>
  )
}

export default MoviesDetails
