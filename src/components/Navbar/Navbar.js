import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=> {
    return (
            <header className="container">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top top-nav">
                    <a className="navbar-brand mr-4" href="/"><b>Contact Listing</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarToggle">
                    <div className="navbar-nav m-auto">
                        <Link className="nav-link nav-item" to="/">Contacts</Link>
                        <Link className="nav-link nav-item" to="/new" tabIndex="-1" aria-disabled="true"> Add New</Link>
                    </div>
                    
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
         </header>
    )
}

export default Navbar;