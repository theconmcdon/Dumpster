import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IChirp } from "../utils/types";
import { nameProps } from '../utils/types';
import DumpsterEdit from "./DumpsterEdit";
import { Link } from "react-router-dom";

const DumpsterPost: React.FC<nameProps> = (props) => {
    const { id } = useParams<{ id: string }>();
    const [chirp, setChirp] = useState<IChirp>({ id: id, name: "", text: "", day: "", time: "", email: "", edit: "" });
    const history = useHistory();

    useEffect(() => {
        (async () => {
            let res = await fetch(`/dumpster/feed/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();
    }, []);



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


    const [conditional, setConditional] = useState(false)
    const [refetch, setRefetch] = useState(false)

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

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const hoverEnterButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.remove('text-danger')
    }

    const deletePost = async (chirpid) => {
        let res = await fetch(`/dumpster/feed/${chirpid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (res.ok) {
            history.goBack()
        } else {
            console.log('uh oh');
        }
    }

    useEffect(() => {
        if (conditional) {
            (async () => {
                let res = await fetch(`/dumpster/feed/${id}`);
                let chirp = await res.json();
                setChirp(chirp);
                setConditional(false);
            })();
        }
    }, [conditional]);

    if (chirp.name !== props.username) {
        return (
            <section>
                <div className='mt-5 row'>
                    <div className='col-1'></div>
                    <div id='test' className='col-1 beep align-self-center lead'>
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
                    </div>
                    <div className="col-md-9">


                        <blockquote key={id} style={chirpBuddy} className="blockquote bg-white border p-5">
                            <div className='row'>
                                <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div className='col-8'>
                                    <div className='pl-5 lead'>{chirp.email}</div>
                                    <p className="pl-5 mb-0">{chirp.text}</p>
                                    <footer className="ml-5 blockquote-footer">@{chirp.name} on <cite>{chirp.day} at {chirp.time}<span title='edited'>{chirp.edit}</span></cite></footer>
                                </div>
                            </div>
                        </blockquote>



                    </div>
                    <div className='col-1'></div>
                </div>
                <div className="row card-body text-center">
                    <button onClick={() => history.goBack()} className='btn btn-danger mx-auto'>go back</button>
                </div>
            </section>
        );
    } else if (chirp.name == props.username) {
        return (
            <section>
                <div className='mt-5 row'>
                    <div className='col-1'></div>
                    <div id='test' className='col-1 beep align-self-center lead'>
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
                    </div>
                    <div className="col-md-9">

                        <blockquote onMouseOver={() => setConditional(true)} onMouseLeave={() => setConditional(true)} key={id} style={chirpBuddy} className="blockquote bg-white border p-5">
                            <div className='row'>
                                <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div className='col-8'>
                                    <div className='pl-5 lead'>{chirp.email}</div>
                                    <p className="pl-5 mb-0">{chirp.text}</p>
                                    <footer className="ml-5 blockquote-footer">@{chirp.name} on <cite>{chirp.day} at {chirp.time}<span title='edited'>{chirp.edit}</span></cite></footer>
                                </div>
                            </div>
                            <div className='mt-3 row'>
                                <div className='col-1'></div>
                                <div onClick={() => setConditional(false)}>

                                    <DumpsterEdit pageID={id} id={`edit-${chirp.id}`} text={chirp.text} nickName={chirp.email} username={chirp.name} />
                                </div>
                                <div style={fontBuddy} id={`delete-${chirp.id}`} onMouseEnter={() => hoverEnterButton(`delete-${chirp.id}`)} onMouseLeave={() => hoverLeaveButton(`delete-${chirp.id}`)} onClick={() => deletePost(id)} className='font-weight-lighter col-1'>delete</div>
                                <div className='col-7'></div>
                            </div>
                        </blockquote>

                    </div>
                    <div className='col-1'></div>
                </div>
                <div className="row card-body text-center">
                    <button onClick={() => history.goBack()} className='btn btn-danger mx-auto'>go back</button>
                </div>
            </section>
        )
    }
};

export default DumpsterPost;