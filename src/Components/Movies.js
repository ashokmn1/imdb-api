import React from 'react'
import { useSelector } from 'react-redux'


const Movies = () => {
    const res = useSelector((state) => state.allmovies.data)

    let render
    if (res != undefined) {
        const renderList = res.map((movie) => {
            const { id, moviename, moviedesc, movieposter, categories, leadroles } = movie
            const allCategories = categories.map(each => {
                return (
                    <button className='category'>{each}</button>
                )
            })
            const allLead = leadroles.map(each=>{
                return(
                    <span className='lead'>{each}</span>
                )
            })

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
                                <div className='movie_categories'>
                                    <div>{allCategories}</div>
                                </div>
                                <div className='movie_description'>
                                    {moviedesc}
                                </div>
                                <div className='leadrole'>
                                    Stars: {allLead}
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

export default Movies
