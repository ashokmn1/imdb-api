import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../redux/actions/directorAction'
import Movies from './Movies'
import { Link } from 'react-router-dom'
import "tachyons"

const MoviesListing = () => {

  const dispatch = useDispatch()

  const fetchMovies = async () => {
    const response = await axios.get(`https://node-movie-api-ashok.herokuapp.com/movies`)
      .catch((err) => {
        console.log("error", err)
      })
    dispatch(setMovies(response.data))
  }

  const fetchByCategory = async (genre) => {
    const response = await axios.get(`https://node-movie-api-ashok.herokuapp.com/movies/category/${genre}`)
      .catch((err) => {
        console.log("error", err)
      })
    console.log(response.data)
    dispatch(setMovies(response.data))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className='movie_page'>
      <ul >

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory("Action")} >
          <input type="text" value="Action" readOnly></input>
        </Link>

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Comedy")} >
          <input type="text" value="Comedy" readOnly></input>
        </Link >

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Drama")} >
          <input type="text" value="Drama" readOnly></input>
        </Link>

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Romance")} >
          <input type="text" value="Romance" readOnly></input>
        </Link>

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Musical")} >
          <input type="text" value="Musical" readOnly></input>
        </Link>

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Crime")} >
          <input type="text" value="Crime" readOnly></input>
        </Link>

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Thriller")} >
          <input type="text" value="Thriller" readOnly></input>
        </Link >

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory("Horror")} >
          <input type="text" value="Horror" readOnly></input>
        </Link >

        <Link className='li grow' to={"/movies"} onClick={() => fetchByCategory(" Fantasy")} >
          <input type="text" value="Fantasy" readOnly></input>
        </Link >

      </ul >

      <div className='movie_container'>
        <Movies />
      </div>

    </div >
  )
}

export default MoviesListing
