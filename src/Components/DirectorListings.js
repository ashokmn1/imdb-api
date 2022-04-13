import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setDirectors } from '../redux/actions/directorAction'
import DirectorComponent from './DirectorComponent'

const ProductListing = () => {

    const dispatch = useDispatch()
    
    const fetchDirectors = async () => {
        const response = await axios.get(`https://node-movie-api-ashok.herokuapp.com/directors`)
        .catch((err) =>{
            console.log("error",err)
        })
        dispatch(setDirectors(response.data))
    }

    useEffect (()=> {
        fetchDirectors()
    },[])

  return (
    <div className='director_container'>
      <DirectorComponent />
    </div>
  )
}

export default ProductListing
