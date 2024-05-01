import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header d-flex flex-column align-items-center'>
        <img className='header_logo img img-fluid w-25'
            src='/amazon_logo.jpg'></img>
        <div className='header_search'>
            <input className='header_searchInput' type='text'>
                {/*Search Logo*/}
            </input>
        </div> 
        <div className='header_nav'>
            <div className='header_option'>
                Hello, Sign in
            </div>
            <div className='header_option'>
                Returns & orders
            </div>
            <div className='header_option'>
            <i class="bi bi-cart"></i>
            </div>

            <div className='header_option'>
                
            </div>
        </div>
    </div>
  )
}

export default Header
