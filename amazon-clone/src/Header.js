import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav class="d-flex navbar navbar-main sticky-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img className='header_logo img-fluid w-50' src='/amazon-logo.png'></img></a>
            <form class="d-flex flext-start" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-warning" type="submit"><i class='bi bi-search'></i></button>
            </form>
            {/* <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-warning" type="submit"><i class='bi bi-search'></i></button>
            </form> */}
            <button type="button" class="btn btn-outline-primary rounded rounded-1">Login</button>
        </div>
        
    </nav>
  )
}

export default Header
