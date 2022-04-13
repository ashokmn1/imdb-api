import React from 'react'
import { Link } from 'react-router-dom'
import "tachyons"


const Header = () => {
  return (
    <div className='heading'>
      <h2>IMDb</h2>
      <div className='buttons'>
        <Link to={"/movies"}>
          <button className='btn grow'>Movies</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
