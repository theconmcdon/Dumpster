import React, { useState, useEffect } from 'react'
import { v4 as uuid4 } from "uuid";
import { nameProps } from '../utils/types';

export interface prePost {
    text: string,
    day: string,
    time: string,
    link: string
}

export interface DumpsterBoardsMusicProps { }

export interface Element { style: any }

const DumpsterBoardsMusic: React.FC<nameProps> = (props) => {

    const positionBuddy: any = {
        position: 'absolute',
        bottom: '0.5em',
        opacity: "0.95",
        color: 'rgb(255,255,255,1)'
    }

    const positionBuddy2: any = {
        position: 'absolute',
        bottom: '3em',
        opacity: "0.95",
        color: 'rgb(255,255,255,1)'
    }

    const transparencyBuddy: any = {
        opacity: "0.95",
        color: 'rgb(255,255,255,1)'
    }

    const [link, setLink] = useState<string>('')
    const [update, setUpdate] = useState('')
    const [array2, setArray2] = useState([])
    const [array, setArray] = useState<prePost[]>([{
        text: '>yt to mp3',
        day: '07/09/2021',
        time: '02:12PM',
        link: 'data:image/jpeg;base64,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'
    },])

    const newPost = () => {
        let date = new Date();
        let prePost: prePost = {
            text: update,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            link: link
        };
        setArray([...array, prePost])
    }

    const displayedPosts = array.map(val => {
        return (
            <div key={`board-post-${val.id}`} className="card ">
                <img src={`${val.link}`} className="card-img" alt="..."></img>
                <div className="card-img-overlay">
                    <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 text-rightcard-title">1🔥</span>
                    <div className='m-2'></div>
                    <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">{val.text}</span>
                    <div><span className="bg-dark bg-gradient card-text"></span></div>
                    <div className='row m-5'></div>
                    <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                    <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted just now by {props.nickName}</span>
                </div>
            </div> 
        )
    });

    useEffect(() => {
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

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

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
        postBtn.style.cursor = 'pointer'
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
        postBtn.style.cursor = 'default'
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }

    return (

        <div>
            <div className='row pb-2 d-flex flex-row bg-danger bg-gradient text-white'>
                <div className='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎🗑️</div>
                <div className='col-10 pl-4 display-4' >/music/</div>
            </div>
            <nav className="row d-flex flex-row mr-5 navbar bg-light bg-gradient navbar-expand-lg navbar-light">
                <div style={{ fontSize: '1.5em' }} className="col-2 lead text-center" >‏‏‎ ‏‏‎ catalogue</div>
                <div className="col-10 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-pills mr-auto">
                        <li className="nav-item">
                            <a  className="text-dark nav-link" href="#">sort by:</a>
                        </li>
                        <li className="nav-item">
                            <a id='submit' className="nav-link active bg-danger text-white" href="#">top</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link text-white" href="#">random</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link text-white" href="#">new</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link text-white" href="#">old</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link text-white" href="#">abc</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="search /music/" aria-label="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">search</button>
                    </form>
                </div>
            </nav>
            <div className='mt-1 ml-3 mr-3 row bg-light bg-gradient d-flex'>
                <div className='col-1'></div>
                <div className='col-1'>
                    <div className=''>
                        <div className='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => newPost()} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>post</div>
                    </div>
                    <div>
                        <div className='border-right lead border-secondary text-right pr-2' id='btnImg' onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>image</div>
                    </div>
                    <div>
                        <div className='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink'  onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>link</div>
                    </div>
                </div>
                <div className='col-9'>
                    <textarea placeholder='post text' style={{width: '100%', height: '50%'}} onChange={e => setUpdate(e.target.value)} className="mb-1 p-2" rows={2}/>
                    <textarea placeholder='img link' style={{width: '100%', height: '28%'}} onChange={e => setLink(e.target.value)} className="mt-1 p-2" rows={2}/>
                </div>
                <div className='col-1'></div> 
            </div>
            <div className='row bg-light bg-gradient'>
                <div className='col-3'></div>
                <div className='col-6 p-2 border-top'></div>
                <div className='col-3'></div>
            </div>
            <div className="mb-3 mr-3 ml-3 card-columns">
                {array2}
                <div className="card ">
                    <img src="https://i.redd.it/pfpmm3bmva451.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 text-rightcard-title">1391🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">>the lyrics are really thoughtful and deep</span>
                        <div><span className="bg-dark bg-gradient card-text"></span></div>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by eee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://imgur.com/Wx0AGit.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="http://i.imgur.com/CTffrdo.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">what do u think</span>
                        <div style={transparencyBuddy} className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">>dont hate her when she gets up to leave</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://imgur.com/Wx0AGit.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="http://i.imgur.com/CTffrdo.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">what do u think</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">>dont hate her when she gets up to leave</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://imgur.com/Wx0AGit.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="http://i.imgur.com/CTffrdo.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">what do u think</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 text-white card-title">1🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient text-white card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div style={transparencyBuddy} className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.kym-cdn.com/entries/icons/original/000/017/520/1405099255590.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1391🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient text-white card-text">>dont hate her when she gets up to leave</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 2 hours ago by eee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://imgur.com/Wx0AGit.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span style={transparencyBuddy} className="h5 bg-dark bg-gradient p-1 card-title">560🔥</span>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text">/meme/ thread</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 3 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 3 hr ago by 2007mcchickengirl</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="http://i.imgur.com/CTffrdo.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">204🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">/chart/ THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 20 sec ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 46 min ago by topgobbler</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://img.discogs.com/k-CCH4MI8AKfp5WWg6EIcq8a3sk=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6249801-1414768649-9844.jpeg.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">112🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">what do u think</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 1 hr ago by postm'lone</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://i.pinimg.com/originals/13/8d/d1/138dd19a8ed3d38cc7c717eac9681e33.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">872🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">>tfw u run out of ribbity ribbity raps</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 1 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 4 hr ago by redditeur</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://pbs.twimg.com/media/Ef9wty0UwAEitU5.png" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">27🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">RYM THREAD</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 32 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 5 hr ago by mikee</span>
                    </div>
                </div>
                <div className="card ">
                    <img src="https://ih1.redbubble.net/image.1231963182.5355/mp,504x516,gloss,f8f8f8,t-pad,600x600,f8f8f8.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <span className="h5 bg-dark bg-gradient p-1 card-title">1🔥</span>
                        <div className='m-2'></div>
                        <span className="bg-dark bg-gradient card-text">Are there any good resources/courses/videos online on extreme metal (especialy black metal) mixing for complete beginners?</span>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump 58 min ago</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 58 min ago by floridashoeshine</span>
                    </div>
                </div>
            </div>









        </div>
    );


};


export default DumpsterBoardsMusic;



/*
                <div className="card ">
                    <img src="https://i.redd.it/pfpmm3bmva451.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <div style={transparencyBuddy} className="d-flex flex-row-reverse card-title">
                            <div style={{height: '1.5em'}} className='h5 text-right col-3 '><span className='p-1 bg-dark bg-gradient'>191🔥</span></div>
                            <div className='col-1'></div>
                            <div className='col-8 p-1'><span className='bg-dark bg-gradient'>>the lyrics are really thoughtful and deep asdflkas asdlkj af w feweifj  zxvc  wef  v vjjviooy  yvn o;aihvw v ;</span></div>
                        </div>
                        <div className='m-2'></div>
                        <span style={transparencyBuddy} className="bg-dark bg-gradient card-text"></span>
                        <div><span className="bg-dark bg-gradient card-text"></span></div>
                        <div className='row m-5'></div>
                        <span style={positionBuddy2} className="bg-dark bg-gradient p-1 card-text">last bump just now</span>
                        <span style={positionBuddy} className="bg-dark bg-gradient p-1 card-text">posted 2 hr ago by eee</span>
                    </div>
                </div>
*/





