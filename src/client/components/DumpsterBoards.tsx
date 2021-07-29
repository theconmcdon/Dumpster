import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { nameProps } from '../utils/types';

export interface DumpsterBoardsProps { }

const DumpsterBoards: React.FC<nameProps> = (props) => {

    const positionBuddy = {
        position: 'absolute',
        bottom: '0.5em',
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const positionBuddy2 = {
        position: 'absolute',
        bottom: '3em',
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const transparencyBuddy = {
        opacity: "0.9",
        color: 'rgb(255,255,255,1)'
    }

    const hoverEnterOption = () => {
        let hoverClass = document.querySelector('#submit')
        hoverClass.classList.add('text-danger')
        hoverClass.classList.remove('text-dark')
    }

    const hoverLeaveOption = () => {
        let hoverClass = document.querySelector('#submit')
        hoverClass.classList.remove('text-danger')
        hoverClass.classList.add('text-dark')
    }

    return (

        <div>
            <div className='row pb-2 d-flex flex-row bg-danger bg-gradient text-white'>
                <div className='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎🗑️</div>
                <div className='col-10 pl-4 display-4' >boards</div>
            </div>

            <nav className="row d-flex flex-row navbar pr-5 bg-light bg-gradient navbar-expand-lg navbar-light">
                <div className="col-2 text-dark navbar-brand text-left text-white mr-0" >‏‏‎‎member boards:</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-10 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="text-dark nav-link text-white" href="#">sort by:</a>
                        </li>
                        <li className="nav-item">
                            <a id='submit' onMouseEnter={() => hoverEnterOption()} onMouseLeave={() => hoverLeaveOption()} className="text-dark nav-link" href="#">most visited</a>
                        </li>
                        <li className="nav-item active">
                            <a className="text-dark nav-link text-white" href="#">abc</a>
                        </li>
                        <li className="nav-item active">
                            <a className="text-dark nav-link text-white" href="#">new</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link text-white" href="#">old</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="search /boards/" aria-label="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">search</button>
                    </form>
                </div>
            </nav>
            <div className='row'>
                <div className='col-2 border-right'>
                    <div className="ml-2 card">
                        <ul className="list-group list-group-flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'boards/music'}><li className="list-group-item pl-2">/music/</li></Link>
                            <li className="list-group-item pl-2">/cooking/</li>
                            <li className="list-group-item pl-2">/homebrewing/</li>
                            <li className="list-group-item pl-2">/wine/</li>
                            <li className="list-group-item pl-2">/leftpolitics/</li>
                            <li className="list-group-item pl-2">/halo/</li>
                            <li className="list-group-item pl-2">/hiking/</li>
                            <li className="list-group-item pl-2">/ufos/</li>
                            <li className="list-group-item pl-2">/wallstreet/</li>
        
                        </ul>
                    </div>
                </div>
                <div className='col-10'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'boards/music'}>
                    <div className="mb-2 mr-4 ml-1 card">
                        <div style={{height: '2.5em', fontSize: '2em' }} className='card-header lead text-white bg-danger'>/music/</div>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '1.25em' }}>we listen to music not opinions</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">2,347 bumps this hour</small></p>
                        </div>
                    </div>
                    </Link>
                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <div style={{height: '2.5em', fontSize: '2em' }} className='card-header lead text-white bg-danger'>/cooking/</div>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '1.25em' }}>fresh hot posts</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">961 bumps this hour</small></p>
                        </div>
                    </div>


                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/homebrewing/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 3 min ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/wine/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 1 min ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/leftpolitics/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 4 min ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/halo/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 5 min ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/hiking/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 40 sec ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/ufos/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post 7 min ago</small></p>
                        </div>
                    </div>

                    <div className="mt-2 mb-2 mr-4 ml-1 card">
                        <img className="card-img-top" src="https://i.imgur.com/SHhYeUc.png" alt="Card image cap"></img>
                        <div className="card-body border-top">
                            <h5 className="card-title lead" style={{ fontSize: '2em' }}>/wallstreet/</h5>
                            <p className="card-text">none of the rest of these work</p>
                            <p className="card-text"><small className="text-muted">last post just now</small></p>
                        </div>
                    </div>


                </div>
            </div>











        </div>
    );


};


export default DumpsterBoards;






