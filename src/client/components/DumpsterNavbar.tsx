import React from 'react'
import { NavLink } from 'react-router-dom'



const DumpsterNavbar = () => {

    

    return (

        <nav className="sticky-top row d-flex flex-row navbar bg-danger bg-gradient navbar-expand-lg navbar-light">
            <a className="col-2 navbar-brand text-white text-center" data-toggle="tooltip" data-placement="bottom" title='secret back-to-top button' href="#">‏‏‎‎dumpster</a>
            
            <div className="col-10 p-0 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-left mr-auto">
                    <li className="mr-2 nav-item">
                        <NavLink to='/' exact activeClassName="active" className='link'><a className="nav-link pl-0 text-white" href="#">timeline</a></NavLink>
                    </li>
                    <li className="ml-2 mr-2 nav-item active">
                        <NavLink to='/boards' className='link' activeClassName="active"><a className="nav-link text-white" href="#">boards</a></NavLink>
                    </li>
                    <li className="ml-2 mr-2 nav-item">
                        <NavLink to='/messages' className='link' activeClassName="active"><a className="nav-link text-white" href="#">messages</a></NavLink>
                    </li>
                    <li className="ml-2 mr-2 nav-item">
                        <NavLink to='/saved' className='link' activeClassName="active"><a className="nav-link text-white" href="#">saved</a></NavLink>
                    </li>
                    <li className="ml-2 mr-2 nav-item">
                        <NavLink to='/notifications' className='link' activeClassName="active"><a className="nav-link text-white" href="#">notifications</a></NavLink>
                    </li>
                    <li className="ml-2 nav-item">
                        <NavLink to='/' className='link' activeClassName="active"><a className="nav-link text-white" href="#">log out</a></NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 mr-5 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="search /dumpster/" aria-label="search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">search</button>
                </form>
            </div>
        </nav>

    )
};

export default DumpsterNavbar;