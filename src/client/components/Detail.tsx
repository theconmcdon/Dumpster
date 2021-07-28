import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IChirp } from "../utils/types";

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [chirp, setChirp] = useState<IChirp>({ id: id, name: "", text: "", day: "", time: "", email: "" });
    const history = useHistory();

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
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
                                <footer className="ml-5 blockquote-footer">@{chirp.name} on <cite title="Source Title">{chirp.day} at {chirp.time}</cite></footer>
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
};

export default Detail;