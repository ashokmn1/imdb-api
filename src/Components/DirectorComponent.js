import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "tachyons"

const DirectorComponent = () => {
    const directors = useSelector((state) => state.allDirectors.directors)
    const renderList = directors.map((director) => {
        const { id, fullname, description, imageurl } = director
        return (
            <div className='main-container grow' key={id}>
                <Link to={`/movies/${id}`}>
                    <div className='cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={imageurl} alt={fullname} />
                            </div>
                            <div className='content'>
                                <div className='fullname'>
                                    {fullname}
                                </div>
                                <div className='description'>
                                    {description}
                                </div>

                            </div>

                        </div>

                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default DirectorComponent
