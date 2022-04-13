import React from 'react'
import { useSelector } from 'react-redux'

const MovieComponent = () => {
    const movies = useSelector((state) => state.director.data)

    let render
    if (movies != undefined) {
        const renderList = movies.map((movie) => {
            const { id, moviename, moviedesc, movieposter } = movie
            return (
                <div className='movie-main-container grow' key={id}>
                    <div className='movie_cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={movieposter} alt={moviename} />
                            </div>
                            <div className='content'>
                                <div className='movie_fullname'>
                                    {moviename}
                                </div>
                                <div className='movie_description'>
                                    {moviedesc}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )
        })
        render = renderList
    }
    return (
        <>
            {render}
        </>
    )
}

export default MovieComponent
