import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { nameProps } from '../utils/types';
import DumpsterEdit from './DumpsterEdit'
import { prePost } from '../utils/types'



export interface DumpsterTimelineProps { }







const DumpsterTimeline: React.FC<nameProps> = (props) => {


    
   ////////////////////////////quick style constants because bootstrap and css docs kinda suck sometimes////////////////////////////

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '100%',
        width: '100%',
        padding: '0px',
        fontSize: '20px'
    }

    const sideBuddy = {
        transform: 'translate(4px)'
    }

    const imgBuddy = {
        height: '70px',
        width: '70px',
        borderRadius: '10px'
    }

    const chirpBuddy = {
        borderRadius: '10px'
    }

    const fontBuddy = {
        fontSize: '16px',
        cursor: 'pointer'
    }

    //////////////////////////////////////////////////useState constants///////////////////////////////////////////////////////////

    const [name, setName] = useState(props.username)
    const [email, setEmail] = useState(props.nickName)
    const [confirm, setConfirm] = useState(false)
    const [test, setTest] = useState<prePost>()
    const [update, setUpdate] = useState<string>()
    const [array2, setArray2] = useState([])
    const [array, setArray] = useState([])
    const [conditional, setConditional] = useState(false)

    ///////////////////Lots of button style related functions to be slimmed down when i care more (sorry)/////////////////////////

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
        console.log(array2)
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
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
        console.log(array2)
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.add('text-danger')
    }

    const hoverLeaveLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.remove('text-danger')
    }

    const hoverEnterRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.remove('text-danger')
    }

    ////////////////////////////////////////////fetch functions and post display stuff/////////////////////////////////////////////////////////

    const displayedPosts = array.map(val => {
        if (val.name == props.username) {
            return (
                <div onMouseOver={() => setConditional(true)} onMouseLeave={() => setConditional(true)} key={`${val.id}`}>
                    
                        <blockquote style={chirpBuddy} className="blockquote bg-white border p-5">
                            <Link style={{ textDecoration: "none" }} className="text-dark" to={`/${val.id}`}>
                            <div className='row'>
                                <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div className='col-8'>
                                    <div className='pl-5 lead'>{val.email}</div>
                                    <p className="pl-5 mb-0">{val.text}</p>
                                    <footer className="ml-5 blockquote-footer">@{val.name} on <cite>{val.day} at {val.time}<span title='edited'>{val.edit}</span></cite></footer>
                                </div>
                            </div>
                            </Link>
                            <div className='mt-3 row'>
                                <div className='col-1'></div>
                                <div onClick={() => setConditional(false)}>

                                <DumpsterEdit pageID={val.id} id={`edit-${val.id}`} text={val.text} nickName={val.email} username={val.name}/>
                                </div>
                                <div style={fontBuddy} id={`delete-${val.id}`} onMouseEnter={() => hoverEnterButton(`delete-${val.id}`)} onMouseLeave={() => hoverLeaveButton(`delete-${val.id}`)} onClick={() => deletePost(val.id)} className='font-weight-lighter col-1'>delete</div>
                                <div className='col-7'></div>
                            </div>
                        </blockquote>
                    
                </div>
            )
        } else {
            return (
                <div key={`${val.id}`}>
                    
                    <blockquote style={chirpBuddy} className="blockquote bg-white border p-5">
                        <Link style={{ textDecoration: "none" }} className="text-dark" to={`/${val.id}`}>
                        <div className='row'>
                            <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                            <div className='col-8'>
                                <div className='pl-5 lead'>{val.email}</div>
                                <p className="pl-5 mb-0">{val.text}</p>
                                <footer className="ml-5 blockquote-footer">@{val.name} on <cite>{val.day} at {val.time}<span title='edited'>{val.edit}</span></cite></footer>
                            </div>
                        </div>
                        </Link>
                    </blockquote>
            
                </div>
            )
        }
    });

    const newPost = async () => {
        let date = new Date();
        let prePost = {
            text: update,
            name: name,
            email: email,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setArray([...array, prePost]);
        setTest(prePost)
        setConfirm(true)
    }

    useEffect(() => {
        sendPost();
    }, [test])

    const sendPost = async () => {
        if (confirm) {
            let res = await fetch("/dumpster/feed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(test)
            });
            setConfirm(false);
            if (res.ok) {
                getPosts();
            } else {
                console.log('uh oh');
            }
        }
    }

    useEffect(() => { 
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

    const getPosts = async () => {
        try {
            const res = await fetch('/dumpster/feed');
            const posts = await res.json();
            setArray(posts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        if (conditional) {
            getPosts();
            setConditional(false);
        }
    }, [conditional]);

    const deletePost = async (id) => {
        let res = await fetch(`/dumpster/feed/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (res.ok) {
            getPosts();
        } else {
            console.log('uh oh');
        }
    }

    return (
        <div>
            <div className='row pb-2 mb-4 d-flex flex-row bg-danger bg-gradient text-white'>
                <div className='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎🗑️</div>
                <div className='col-10 pl-4 display-4' >{props.nickName}'s timeline</div>
            </div>
            <div className='row d-flex'>
                <div className='col-2'>
                    <div className=''>
                        <div className='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>post</div>
                    </div>
                    <div>
                        <div className='border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>add image</div>
                    </div>
                    <div>
                        <div className='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>add link</div>
                    </div>
                </div>
                <div className='col-9'>

                    <textarea style={textBuddy} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUpdate(e.target.value)} className="p-2" rows={2}></textarea>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row d-flex'>
                <div style={sideBuddy} className='col-2 position-fixed lead text-right'>

                    <div>
                        <div className='invisible border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} >Add Image</div>
                    </div>
                    <div>
                        <div className='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                    </div>
                    <div>
                        <div className='border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                    </div>
                    <div>
                        <div className='border-right lead invisible border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                    </div>
                    <div>
                        <div className='invisible border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                    </div>
                    <div>
                        <div id='btnLike' style={hoverBuddy} onMouseEnter={() => hoverEnterLike()} onMouseLeave={() => hoverLeaveLike()} className='border-right mt-3 lead border-secondary text-right pr-2'>like</div>
                    </div>
                    <div className=''>
                        <div id='btnRec' style={hoverBuddy} onMouseEnter={() => hoverEnterRec()} onMouseLeave={() => hoverLeaveRec()} className='border-right lead border-secondary text-right pr-2'>repost</div>
                    </div>
                    <div>
                        <div id='btnSave' style={hoverBuddy} onMouseEnter={() => hoverEnterSave()} onMouseLeave={() => hoverLeaveSave()} className='border-right lead border-secondary text-right pr-2'>save</div>
                    </div>
                    <div>
                        <div id='btnShare' style={hoverBuddy} onMouseEnter={() => hoverEnterShare()} onMouseLeave={() => hoverLeaveShare()} className='border-right mb-3 lead border-secondary text-right pr-2'>share</div>
                    </div>
                    <div>
                        <div className='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} ></div>
                    </div>
                </div>
                <div id='mainbody' className='col-9 d-flex flex-column offset-2 mt-3 overflow-auto'>
                    <div className=''>{array2}</div>
                </div>
                <div className='col-1 offset-11'></div>
            </div>
            <div className='d-flex row mt-5 mb-5'>
                <div className='col-12'>
                    <div className='lead justify-content-center row'>end of feed</div>
                </div>
            </div>
        </div>

    )
}

export default DumpsterTimeline